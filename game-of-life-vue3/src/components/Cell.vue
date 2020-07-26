<template>
    <rect :x="x * cellSize + 1" :y="y * cellSize + 1" :width="cellSize - 2" :height="cellSize -2"
          :class='alive ? "field-filled" : "field-empty"'/>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";


  @Component({
    props: {
      cellSize: Number,
      x: Number,
      y: Number,
      alive: Boolean
    }
  })
  export default class Cell extends Vue {
    // Initial data can be declared as instance properties
    cellSize: number;
    x: number;
    y: number;
    alive: boolean;
  }
</script>


