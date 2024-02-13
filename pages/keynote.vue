<template>
  <div class="keynote">
    <div
      v-if="isWipeMode"
      class="ttl"
    >
      <hgroup>
        <h1 class="ttl-main">💪😄</h1>
        <h2 class="ttl-sub">Muscle & Smile</h2>
      </hgroup>
      <p class="name">Fumitaka KIMIZUKA（@ki_230）</p>
    </div>
    <div
      :data-is-wipe="isWipeMode"
      class="wipe"
    >
      <game-window
        @count="handleCountUp"
        @pointup="handlePointup"
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
      <span>https://smile.kimizuka.fm</span>
    </p>
  </div>
</template>

<script lang="ts">
  import * as faceapi from 'face-api.js';
  import io from 'socket.io-client';
  import { Component, Vue } from 'vue-property-decorator';
  import GameWindow from '~/components/organisms/GameWindow.vue';
  import Story from '~/assets/js/Story.js';

  const socket = io('http://localhost:3000');

  @Component({
    components: {
      GameWindow
    }
  })
  export default class Keynote extends Vue {
    msgIndex: number = 0;
    msgFontSize: number = 72;
    msgBottom: number = 120;
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
          this.handleCountUpDown();
          break;
        case 'ArrowLeft':
          this.msgFontSize -= 8;
          break;
        case 'ArrowRight':
          this.msgFontSize += 8;
          break;
        case 'p':
          this.$router.push('/');
          break;
        case 'd':
          this.msgIndex = 116;
          this.handleCountUp(2);
          break;
        case ' ':
          this.msgIndex = 0;
          (this.$refs.gameWindow as any).reset();
          break;
      }
    }

    handleCountUpDown() {
      this.msgIndex = Math.max(this.msgIndex - 1, 0);
      this.showMsg();
    }

    handleCountUp(point: number) {
      if (!this.isSmileMode || point > 1) {
        socket.emit('count');
        this.msgIndex = Math.min(this.msgIndex + 1, Story.length - 1);
        this.showMsg();
      }
    }

    handlePointup() {
      socket.emit('pointup');
    }

    showMsg() {
      const msg: HTMLElement = this.$refs.msg as HTMLElement;

      msg.innerHTML = Story[this.msgIndex];
      socket.emit('msg', removeEmoji(msg.innerText));

      this.isSmileMode = !!msg.querySelector('[data-smile="true"]');
      this.isWipeMode = !!msg.querySelector('[data-wipe="true"]');
      this.isQrMode = !!msg.querySelector('[data-qr="true"]');

      function removeEmoji(txt: string):string {
        const ranges = [
          '\ud83c[\udf00-\udfff]',
          '\ud83d[\udc00-\ude4f]',
          '\ud83d[\ude80-\udeff]',
          '\ud7c9[\ude00-\udeff]',
          '[\u2600-\u27BF]'
        ];

        return txt.replace(new RegExp(ranges.join('|'), 'g'), '');
      }
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
  .keynote {
    cursor: none;
  }

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
    font-size: 72px;
    /* -webkit-text-stroke: #FFF 4px; */
  }

  .name {
    margin-top: 40px;
    font-size: 40px;
    /* -webkit-text-stroke: #FFF 2px; */
  }

  .msg {
    position: fixed;
    bottom: 64px;
    left: 8px; right: 8px;
    margin: 0;
    color: #FFF;
    font: 72px 'Noto Sans JP';
    font-weight: 900;
    text-align: center;
    text-shadow: 0 0 8px #FFF;
    /* -webkit-text-stroke: 4px #000; */
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
      background: #FFF;
    }

    small {
      display: block;
      margin-top: 24px;
      color: #FFF;
      font-size: 24px;
      font-weight: 900;
      /* -webkit-text-stroke: 1px #000; */

    }

    &[data-is-qr-mode] {
      opacity: 1;
    }
  }
</style>