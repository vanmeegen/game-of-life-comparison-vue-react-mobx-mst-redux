import {Configuration} from "./common/Configuration";
import Vue from "vue";
// for minimal app test setup
import "./components/app.css";
import Comp from "./components/Main.vue";
/*
 * Bootstrap the app
 */
function main(): void {
  console.log("running in mode " + (Configuration.isDevelopment() ? "development" : "production"));
  new Vue({
    el: '#app-container',
    render: h => h(Comp)
});
}
main();

