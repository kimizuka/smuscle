<template>
  <nuxt-link
    class="wrapper"
    to="/game"
  >
    <div class="box">
      <hgroup>
        <h1 class="ttl-main">💪😄</h1>
        <h2 class="ttl-sub">Muscle & Smile</h2>
      </hgroup>
      <a class="btn">{{ msg }}</a>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Index extends Vue {
    msg:string = this.isSp() ? 'Tap to Start' : 'Click to Start';

    isSp() {
      const ua = navigator.userAgent.toLowerCase();

      return /iphone|ipad|ipod|android/.test(ua);
    }

    handleKeyDown(evt: any) {
      switch (evt.key) {
        case 'p':
          this.$router.push('/keynote');
          break;
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
  .wrapper {
    display: flex;
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .8);
  }

  .box {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    width: 576px; height: 320px;
  }

  hgroup {
    text-align: center;
  }

  .ttl-main {
    font-size: 160px;
  }

  .ttl-sub {
    font-size: 40px;
    text-shadow: #FFF -2px 0 0,
                 #FFF 2px 0 0,
                 #FFF 0 -2px 0,
                 #FFF 0 2px 0;
    /* -webkit-text-stroke: #FFF 2px; */
  }

  .btn {
    position: absolute;
    left: 0; right: 0;
    bottom: 0px;
    margin: auto;
    color: #FFF;
    font-size: 80px;
    text-align: center;
    text-shadow: #000 -2px 0 0,
                 #000 2px 0 0,
                 #000 0 -2px 0,
                 #000 0 2px 0;
    /* -webkit-text-stroke: #000 4px; */
    animation: blink 4s ease-in-out infinite;
  }

  @media (max-width: 600px) {
    .box {
      width: 320px; height: 232px;
    }

    .ttl-main {
      font-size: 120px;
    }

    .ttl-sub {
      font-size: 24px;
      /* -webkit-text-stroke: #FFF 1px; */
    }

    .btn {
      font-size: 40px;
      /* -webkit-text-stroke: #000 2px; */
    }
  }
</style>