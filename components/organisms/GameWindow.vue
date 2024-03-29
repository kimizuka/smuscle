<template>
  <div>
    <div
      :style="{ transform: `scale(${ screenScale })` }"
      class="wrapper"
    >
      <video
        ref="video"
        playsinline="true"
        autoplay
        muted
        @loadeddata="handleLoad"
      />
      <canvas ref="canvas" />
    </div>
    <p
      :data-is-smile-mode="isSmileMode"
      class="smile-mode"
    />
    <div
      :data-is-smile="smilePoint > 0"
      class="point-box"
    >
      <p
        :style="{ transform: `scale(${emojiScale})` }"
        :data-emotion="emotion"
        class="emoji"
      />
      <div
        :data-is-anim="isAnimCount"
        class="point"
      >
        <p
          :data-is-timer="timerFlag"
          class="current"
        >
          <span>{{ String(Math.min(displayPoint, 9999)).padStart(4, '0') }}</span>
        </p>
        <p
          :data-is-show="isShowBonus"
          class="diff"
        >
          <span>+{{ diffPoint }}pt</span>
        </p>
      </div>
    </div>
    <div
      :data-is-loadind="isLoading"
      class="loading"
    />
  </div>
</template>

<script lang="ts">
  import * as faceapi from 'face-api.js';
  import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
  import Counter from '~/assets/js/Counter.js';
  import Smile from '~/assets/js/Smile.js';

  @Component({})
  export default class GameWindow extends Vue {
    isLoading: boolean = true;
    screenScale: number = 1;
    options: any = new faceapi.TinyFaceDetectorOptions();
    emotion: string = '';
    currentPoint: number = 0;
    displayPoint: number = 0;
    diffPoint: number = 0;
    isAnimCount: boolean = false;
    isShowBonus: boolean = false;
    smilePoint: number = 0;
    timerFlag: boolean = false;

    get wrapper(): HTMLElement {
      return this.$refs.wrapper as HTMLElement;
    }

    get video(): HTMLVideoElement {
      return this.$refs.video as HTMLVideoElement;
    }

    get canvas(): HTMLCanvasElement {
      return this.$refs.canvas as HTMLCanvasElement;
    }

    get emojiScale(): number {
      if (!this.emotion) {
        return .8;
      } else if (this.emotion === 'happy') {
        return 1 + this.smilePoint / 2;
      }

      return 1;
    }

    @Prop({
      type: Boolean,
      default: true
    })
    isSmileMode: boolean;

    @Watch('smilePoint')
    handleWatchSmilePoint(newPoint: number) {
      Counter.addBonus(Math.min(newPoint * 100, 99) | 0);
      this.currentPoint = Counter.getScore();
    }

    @Watch('currentPoint')
    handleChangeCount(newPoint: number, oldPoint: number) {
      const DURATION = 800;
      let startTime: number | null = null;
      let progress = 0;

      this.diffPoint = Math.max(newPoint - oldPoint, 0);

      this.$emit('count', this.diffPoint);

      if (this.diffPoint > 1) {
        const render = (delta: number = 0) => {
          if (delta) {
            if (!startTime) {
              startTime = delta;
            }

            progress = (delta - startTime) / DURATION;
          }

          if (newPoint > this.displayPoint) {
            this.displayPoint = oldPoint + ((newPoint - oldPoint) * progress) | 0;
            this.$emit('pointup');
            requestAnimationFrame(render);
          } else {
            startTime = null;
            this.timerFlag = false;
            this.displayPoint = newPoint;
          }
        };

        this.timerFlag = true;
        render();
      } else {
        this.displayPoint = newPoint;
      }

      this.isAnimCount = true;
      this.isShowBonus = true;
    }

    reset() {
      this.currentPoint = 0;
      this.displayPoint = 0;
      this.diffPoint = 0;
      this.isAnimCount = false;
      this.isShowBonus = false;
      this.smilePoint = 0;
      this.timerFlag = false;

      Counter.reset();
      Smile.reset();
    }

    handleResize() {
      const scaleWidth = window.innerWidth / this.video.clientWidth;
      const scaleHeight = window.innerHeight / this.video.clientHeight;

      this.screenScale = Math.max(scaleWidth, scaleHeight);
    }

    handleLoad() {
      this.update();
    }

    async detect() {
      const result = await faceapi.detectSingleFace(
        this.video,
        this.options
      ).withFaceExpressions();

      if (!result) {
        this.canvas.width = this.canvas.width;
        this.emotion = '';
        this.isAnimCount = false;

        Counter.standby(() => {
          this.smilePoint = Smile.standby();
          this.isShowBonus = false;
        });

        return;
      }

      const dims = faceapi.matchDimensions(
        this.canvas,
        this.video,
        true
      );
      const resized = faceapi.resizeResults(
        result,
        dims
      );

      faceapi.draw.drawDetections(
        this.canvas,
        resized
      );

      faceapi.draw.drawFaceExpressions(
        this.canvas,
        resized,
        0.05
      );

      const expressions = resized.expressions.asSortedArray();

      this.emotion = expressions[0].expression;

      const probability = expressions[0].probability;

      if (this.isSmileMode && this.emotion === 'happy' && probability > 0.7) {
        this.smilePoint = Smile.count(Math.pow((probability - 0.7) / 0.3 , 2));
      } else {
        this.emotion = 'neutral';
      }

      Counter.addPoint();
      this.currentPoint = Counter.getScore();
    }

    async update() {
      await this.detect();
      requestAnimationFrame(this.update);
    }

    async mounted() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      let webcamId = '';
      let faceTimeId = '';
      let deviceId = '';

      devices.forEach((device) => {
        if (device.kind === 'videoinput') {
          if (device.label.includes('HD Pro Webcam')) {
            webcamId = device.deviceId;
          } else if (device.label.includes('FaceTime')) {
            faceTimeId = device.deviceId;
          }
        }
      });

      deviceId = webcamId || faceTimeId;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: deviceId ? {
          deviceId
        } : {
          facingMode: 'user'
        }
      });
      const modelpath = 'https://justadudewhohacks.github.io/face-api.js/models';

      await faceapi.loadTinyFaceDetectorModel(modelpath);
      await faceapi.loadFaceExpressionModel(modelpath);

      window.addEventListener('resize', this.handleResize);

      this.video.addEventListener('play', () => {
        this.handleResize();
        this.isLoading = false;
      });

      this.video.srcObject = stream;
    }

    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 50%; left: 50%;
  }

  .smile-mode {
    position: absolute;
    top: 40px; left: 40px;
    font-size: 40px;
    text-shadow: #FFF -2px 0 0,
                 #FFF 2px 0 0,
                 #FFF 0 -2px 0,
                 #FFF 0 2px 0;
    /* -webkit-text-stroke: #FFF 2px; */

    &:before {
      color: #000;
      font-size: 32px;
      content: 'SMILE BONUS : ';
    }

    &:after {
      color: #FFF;
      content: 'OFF';
      text-shadow: #000 -2px 0 0,
              #000 2px 0 0,
              #000 0 -2px 0,
              #000 0 2px 0;
      /* -webkit-text-stroke: #000 2px; */
    }

    &[data-is-smile-mode='true'] {
      &:after {
        color: #E91E63;
        content: 'ON';
        text-shadow: #FFF -2px 0 0,
              #FFF 2px 0 0,
              #FFF 0 -2px 0,
              #FFF 0 2px 0;
        /* -webkit-text-stroke: #FFF 2px; */
      }
    }
  }

  video,
  canvas {
    display: block;
    position: absolute;
    top: 0; left: 0;
    transform: translate(-50%, -50%);
  }

  video {
    opacity: .8;
  }

  .emoji {
    position: absolute;
    top: 40px;
    left: -144px;
    font-size: 120px;
    transition: opacity .2s ease-in-out, transform .2s ease-in-out;

    &:before {
      display: block;
      position: absolute;
      top: 50%; left: 50%;
      border-radius: 50%;
      width: 0; height: 0;
      content: '';
      background: rgba(255, 211, 44, .8);
      filter: blur(32px);
      transform: translate(-50%, -50%);
      transition: all .2s ease-in;
    }

    &:after {
      display: block;
      position: relative;
      content: '😐';
    }

    &[data-emotion=''] {
      opacity: .2;
      transition: opacity .2s .2s ease-in-out, transform .2s .2s ease-in-out;
    }

    &[data-emotion='neutral'],
    &[data-emotion='happy'] {
      opacity: 1;
    }

    &[data-emotion='happy'] {
      transition: transform .1s ease-in;

      &:before {
        width: 160px; height: 160px;
      }

      &:after {
        content: '😄';
      }
    }
  }

  .point-box {
    position: absolute;
    top: 40px; right: 40px;

    &[data-is-smile] {
      .current {
        text-shadow: 0 0 32px #FFF,
                   #FFF -2px 0 0,
                   #FFF 2px 0 0,
                   #FFF 0 -2px 0,
                   #FFF 0 2px 0;
      }

      .diff {
        color: rgba(255, 211, 44, 1);
        font-size: 80px;
        text-shadow: 0 0 16px #FFF,
                   #FFF -2px 0 0,
                   #FFF 2px 0 0,
                   #FFF 0 -2px 0,
                   #FFF 0 2px 0;
        /* -webkit-text-stroke: #FFF 4px; */

        &:after {
          display: block;
          font-size: 40px;
          content: 'Smile Bonus !';
          text-shadow: #FFF -2px 0 0,
                       #FFF 2px 0 0,
                       #FFF 0 -2px 0,
                       #FFF 0 2px 0;
          /* -webkit-text-stroke: #FFF 2px; */
        }
      }
    }
  }

  .point {
    position: relative;
    width: 344px;
    color: #FFF;
    font-size: 120px;
    text-align: center;
    text-shadow: #000 -2px 0 0,
                 #000 2px 0 0,
                 #000 0 -2px 0,
                 #000 0 2px 0;
    /* -webkit-text-stroke: #000 4px; */

    &[data-is-anim] {
      .current {
        animation: countup .2s ease-in-out;
      }
    }

    &:before {
      display: block;
      font-size: 64px;
      content: 'SCORE';
    }

    .current {
      color: #000;
      transition: all .2s ease-in-out;
      text-shadow: #FFF -2px 0 0,
                   #FFF 2px 0 0,
                   #FFF 0 -2px 0,
                   #FFF 0 2px 0;
      /* -webkit-text-stroke: #FFF 4px; */

      &[data-is-timer] {
        transform: scale(1.1);
      }
    }

    .diff {
      color: #FFF;
      font-size: 64px;
      opacity: 0;
      transition: all .2s ease-in-out;
      text-shadow: #000 -2px 0 0,
                   #000 2px 0 0,
                   #000 0 -2px 0,
                   #000 0 2px 0;
      /* -webkit-text-stroke: #000 4px; */

      &[data-is-show] {
        animation: bonus 2.4s ease-in-out;
      }
    }
  }

  .loading {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: rgba(0, 0, 0, 0);
    transition: background .4s .2s ease-out;

    &[data-is-loadind] {
      background: rgba(0, 0, 0, 1);
    }
  }

  @media (max-width: 800px) {
    .point-box {
      top: 10px; right: 10px;
      transform: scale(.6);
      transform-origin: right top;
    }

    .smile-mode {
      display: none;
    }
  }
</style>