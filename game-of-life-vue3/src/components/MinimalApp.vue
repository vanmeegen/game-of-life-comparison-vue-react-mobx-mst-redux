<template>
<div>
  <h1 @click="onClick">{{message}}</h1>
  <Comp message="Hi there"/>
</div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Comp from "./MinimalComponent.vue";

  @Component({
  props: {
    message: String
  },
  components: {Comp}
}) export default class App extends Vue {
  // Initial data can be declared as instance properties
  message: string;
  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}
</script>