<template>
<h1 @click="onClick">Comp {{message}}</h1>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
  props: {
    message: String
  }
}) export default class MinimalComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string;
  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}
</script>