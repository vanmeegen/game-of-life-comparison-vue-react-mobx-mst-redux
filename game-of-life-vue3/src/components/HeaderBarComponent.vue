<template>
 <div class="editor-bar" :title='tooltip || "unknown"'>
   <div>
     <h3 class="editor-title">{{title}}</h3>
     <a href="http://www.mvmsoft.de" style="display:inline-block; margin-left: 5px">Author: Marco van Meegen</a>
       <FPSMeter :id="fpsId"/>
   </div>
   <div class="editor-menu btn-group" role="group">
     <slot/>
   </div>
 </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import FPSMeter from "./FPSMeter.vue";

  @Component({
props: {
  title: String,
  fpsId: String,
  tooltip: String,
  children: Object
  },
  components: {
    FPSMeter
  }
})
 export default class HeaderBarComponent extends Vue {
  title: string;
  fpsId: string;
  tooltip: string;
  children: Object;
}
</script>
