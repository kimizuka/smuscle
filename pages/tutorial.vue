<template>
  <nuxt-link
    class="wrapper"
    to="/game"
  >
    <div class="box">
      <a class="btn">{{ msg }}</a>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Tutorial extends Vue {
    msg:string = this.isSp() ? 'Tap to Start' : 'Click to Start';

    isSp() {
      const ua = navigator.userAgent.toLowerCase();

      return /iphone|ipad|ipod|android/.test(ua);
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

  .btn {
    position: absolute;
    left: 0; right: 0;
    bottom: 0px;
    margin: auto;
    color: #fff;
    font-size: 80px;
    text-align: center;
    -webkit-text-stroke: #000 4px;
    animation: blink 4s ease-in-out infinite;
  }

  @media (max-width: 600px) {
    .box {
      width: 320px; height: 232px;
    }

    .btn {
      font-size: 40px;
      -webkit-text-stroke: #000 2px;
    }
  }
</style>