<template>
<div id="demo">
  <HeaderBarComponent title="Game of Life" fpsId="fps" tooltip="Game of Life with Vue.js" :children="{}"/>
  <svg width="200" height="200">
    <CellGrid :cellSize="7" :board="board"/>
    <Grid :cellSize="7" :maxX="board.maxX" :maxY="board.maxY"/>
  </svg>
</div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import CellGrid from "./CellGrid.vue";
  import Grid from "./Grid.vue";
  import HeaderBarComponent from "./HeaderBarComponent.vue";
  import {Board} from "../stores/ModelStore"

  @Component({
    props: {
      board: Object
    },
    components: {
      CellGrid, Grid, HeaderBarComponent
    }
   })
 export default class Svg extends Vue {
    board: Board;
}
</script>