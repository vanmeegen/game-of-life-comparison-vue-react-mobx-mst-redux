<template>
<g>
  <line v-for="x in maxX" :key="'vert' + x" :x1="x * cellSize" :y1="0" :x2="x * cellSize" :y2 = "maxX * cellSize" class="board-grid"/>
  <line v-for="y in maxY" :key="'hor' + y" :x1="0" :y1="y*cellSize" :x2="maxX * cellSize" :y2 = "y * cellSize" class="board-grid"/>
</g>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";


  @Component({
    props: {
        cellSize: Number,
        maxX: Number,
        maxY: Number
    }
})
 export default class Grid extends Vue {
  cellSize: number;
  maxX: number;
  maxY: number;
}
</script>
