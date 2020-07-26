<template>
    <GameOfLifeContainer :board="board"/>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  import GameOfLifeContainer from "./GameOfLifeContainer.vue";
  import modelStore from "../stores/ModelStore";

  @Component({
components: {
    GameOfLifeContainer
  }
})
 export default class Main extends Vue {
  data() {
      return {
        board: modelStore.board
      }
  }
}
</script>


