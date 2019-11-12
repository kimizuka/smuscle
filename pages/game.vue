<template>
  <game-window :is-smile-mode="true" />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import GameWindow from '~/components/organisms/GameWindow.vue';

  @Component({
    components: {
      GameWindow
    }
  })
  export default class Game extends Vue {}
</script>

<style lang="scss" scoped>
</style>