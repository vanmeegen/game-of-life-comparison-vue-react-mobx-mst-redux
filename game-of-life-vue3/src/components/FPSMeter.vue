<template>
    <h6 style="margin: 5px; display: inline-block">FPS
        <span class="label label-default" :id="id">0</span>
    </h6>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    props: {
      id: String
    }
  })
  export default class FPSMeter extends Vue {
    id: string;
  }
</script>