import Vue from "vue";
import seating_chart from "./seating_chart.vue";
import members from "./members";
const app = new Vue({
 el: "#seating-chart",
 template: '<seating_chart ref="seating_chart" :members="members" />',
 data: { members },
 components: { seating_chart },
});
window.app = app;
window.Vue = Vue;
