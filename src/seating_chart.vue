<template>
 <svg :width="width" :height="height">
 <g class="seating_chart">
 <g class="table-line" v-for="(table, index) in tables" :transform="translate(index)" >
 <rect_table :members="table"/>
 </g>
 </g>
 </svg>
</template>
<script>
 "use strict";

import rect_table from "./rect_table";
import config from "./config";

export default {
 props: ['members'],
 computed: {
  tables(){
   var a=Array.from({
    length: Math.ceil(this.members.length / config.table.seat)
   }, (_, index)=>{
    var i = index*config.table.seat;
    return this.members.slice(i, i+config.table.seat);
   });
   return a;
  },
  height(){
   return this.tableY(
    Math.ceil(this.members.length / config.table.seat + config.seatingChart.horizontal)
    );
  },
  width(){
   return 1000;
  },
 },
 methods: {
  tableX(index){
   var table_horizon = config.seatingChart.horizontal;
   var horizon = (index % table_horizon);
   var seat_horizon = Math.ceil(config.table.seat/2);
   return (config.seatWidth + config.seatMargin) *
    seat_horizon * horizon +
    config.seatingChart.margin * horizon;
  },
  tableY(index){
   var vertical = Math.floor(index / config.seatingChart.horizontal);
   return ((config.seatHeight +
    config.seatMargin)*2 +
    config.table.width +
    config.seatingChart.margin) * vertical;
  },
  translate(index){
   return `translate(${this.tableX(index)}, ${this.tableY(index)})`;
  }
 },
 components: {
  rect_table,
 },
}
 </script>
