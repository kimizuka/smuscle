<template>
  <div class="keynote">
    <div
      v-if="isWipeMode"
      class="ttl"
    >
      <hgroup>
        <h1 class="ttl-main">💪😄</h1>
        <h2 class="ttl-sub">10. Muscle & Smile</h2>
      </hgroup>
      <p class="name">Fumitaka KIMIZUKA（@ki_230）</p>
    </div>
    <div
      :data-is-wipe="isWipeMode"
      class="wipe"
    >
      <game-window
        @count="handleCountUp"
        :is-smile-mode="isSmileMode"
        ref="gameWindow"
      />
    </div>
    <p
      :style="{
        bottom: `${msgBottom}px`,
        fontSize: `${msgFontSize}px`
      }"
      ref="msg"
      class="msg"
    />
    <p
      :data-is-qr-mode="isQrMode"
      class="qr"
    >
      <img
        src="~assets/img/chart.png"
        width="300"
        height="300"
      />
      <span>https://kimizuka.github.io/smuscle/</span>
      <small>※ 現在iOS調整中</small>
    </p>
  </div>
</template>

<script lang="ts">
  import * as faceapi from 'face-api.js';
  import { Component, Vue } from 'vue-property-decorator';
  import GameWindow from '~/components/organisms/GameWindow.vue';
  import Story from '~/assets/js/Story.js';

  @Component({
    components: {
      GameWindow
    }
  })
  export default class Keynote extends Vue {
    msgIndex: number = 0;
    msgFontSize: number = 72;
    msgBottom: number = 104;
    isSmileMode: boolean = false;
    isWipeMode: boolean = true;
    isQrMode: boolean = false;

    handleKeyDown(evt: any) {
      switch (evt.key) {
        case 'j':
          this.msgBottom -= 8;
          break;
        case 'k':
          this.msgBottom += 8;
          break;
        case 'ArrowDown':
          this.handleCountUp(2);
          break;
        case 'ArrowUp':
          this.handleCountDown();
          break;
        case 'ArrowLeft':
          this.msgFontSize -= 8;
          break;
        case 'ArrowRight':
          this.msgFontSize += 8;
          break;
        case ' ':
          this.msgIndex = 0;
          (this.$refs.gameWindow as any).reset();
          break;
      }
    }

    handleCountDown() {
      this.msgIndex = Math.max(this.msgIndex - 1, 0);
      this.showMsg();
    }

    handleCountUp(point: number) {

      if (!this.isSmileMode || point > 1) {
        this.msgIndex = Math.min(this.msgIndex + 1, Story.length - 1);
        this.showMsg();
      }
    }

    showMsg() {
      const msg: Element = this.$refs.msg as Element;

      msg.innerHTML = Story[this.msgIndex];
      this.isSmileMode = !!msg.querySelector('[data-smile="true"]');
      this.isWipeMode = !!msg.querySelector('[data-wipe="true"]');
      this.isQrMode = !!msg.querySelector('[data-qr="true"]');
    }

    mounted() {
      window.addEventListener('keydown', this.handleKeyDown);
    }

    beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }
</script>

<style lang="scss" scoped>
  .wipe {
    position: absolute;
    top: 0; right: 0;
    width: 100%; height: 100%;
    transform-origin: right top;
    overflow: hidden;
    transition: transform .2s ease-in-out;

    &[data-is-wipe] {
      transform: translate(-24px, 24px) scale(.3);
    }
  }

  .ttl {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    width: 800px; height: 400px;
    text-align: center;
  }

  .ttl-main {
    font-size: 240px;
  }

  .ttl-sub {
    font-size: 80px;
    -webkit-text-stroke: #fff 4px;
  }

  .name {
    margin-top: 40px;
    font-size: 40px;
    -webkit-text-stroke: #fff 2px;
  }

  .msg {
    position: fixed;
    bottom: 64px;
    left: 8px; right: 8px;
    margin: 0;
    color: #fff;
    font: 72px 'Noto Sans JP';
    font-weight: 900;
    text-align: center;
    text-shadow: 0 0 8px #fff;
    -webkit-text-stroke: 4px #000;
  }

  .qr {
    position: fixed;
    top: 24px; left: 24px;
    text-align: center;
    opacity: 0;
    transition: opacity .2s ease-in-out;

    span {
      display: block;
      margin-top: 24px;
      padding: 8px;
      font-size: 24px;
      background: #fff;
    }

    small {
      display: block;
      margin-top: 24px;
      color: #fff;
      font-size: 24px;
      font-weight: 900;
      -webkit-text-stroke: 1px #000;

    }

    &[data-is-qr-mode] {
      opacity: 1;
    }
  }
</style>