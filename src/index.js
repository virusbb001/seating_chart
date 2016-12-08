import Vue from "vue";
import seating_chart from "./seating_chart.vue";
import members from "./members";
const app = new Vue({
 el: "#seating-chart",
 template: `<div>
 <seating_chart ref="seating_chart" :members="members" />
  <button @click="save">save</button>
  <button @click="load">load</button>
 </div>
 `,
 data: { members },
 components: { seating_chart },
 methods: {
  save(){
   window.localStorage.setItem("session", JSON.stringify(this.members));
  },
  load(){
   this.members = JSON.parse(window.localStorage.getItem("session"));
  }
 }
});
window.app = app;
window.Vue = Vue;
