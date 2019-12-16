<template>
  <game-window
    :is-smile-mode="true"
    @count="handleCountUp"
    @pointup="handlePointup"
  />
</template>

<script lang="ts">
  import io from 'socket.io-client';
  import { Component, Vue } from 'vue-property-decorator';
  import GameWindow from '~/components/organisms/GameWindow.vue';

  const socket = io('http://localhost:3000');

  @Component({
    components: {
      GameWindow
    }
  })
  export default class Game extends Vue {
    handleCountUp(point: number) {
      socket.emit('count');
    }

    handlePointup() {
      socket.emit('pointup');
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