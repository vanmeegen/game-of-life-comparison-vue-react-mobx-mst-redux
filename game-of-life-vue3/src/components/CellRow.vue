<template>
<g>
    <Cell v-for="(aliveState,x) in boardRow" :x="x" :y="y" :cellSize="cellSize" :alive="aliveState" :key="x + maxX * y"/>
</g>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Cell from "./Cell.vue";


  @Component({
props: {
  cellSize: Number,
  maxX: Number,
  maxY: Number,
  y: Number,
  boardRow: Array
  },
  components: {Cell}
})
 export default class CellRow extends Vue {
  cellSize: number;
  maxX: number;
  maxY: number;
  y: number;
  boardRow: Array<boolean>;
}
</script>

