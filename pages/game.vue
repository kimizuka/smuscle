<template>
  <game-window
    :is-smile-mode="true"
    @count="handleCountUp"
    @pointup="handlePointup"
  />
</template>

<script lang="ts">
  //@ts-ignore
  import { Howl } from 'howler';
  import { Component, Vue } from 'vue-property-decorator';
  import GameWindow from '~/components/organisms/GameWindow.vue';

  // const socket = io('http://localhost:3000');

  const count: any = new Howl({
    src: ['/audio/oh.mp3']
  });
  
  const point: any = new Howl({
    src: ['/audio/point.mp3']
  });

  @Component({
    components: {
      GameWindow
    }
  })
  export default class Game extends Vue {
    handleCountUp(point: number) {
      count.play();
      // socket.emit('count');
    }

    handlePointup() {
      point.play();
      // socket.emit('pointup');
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
</style>