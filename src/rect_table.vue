<template>
 <g class="table">
 <g class="seat_line">
 <seat v-for="(member, index) in line0" v-bind:name="member" v-bind:x="seatX(index)" y="0"/>
 </g>
 <rect x="0" :y="y" class="table" :height="height" :width="width">
 </rect>
 <g class="seat_line">
 <seat v-for="(member, index) in line1" v-bind:name="member" v-bind:x="seatX(index, 1)" v-bind:y="seatY(1)"/>
 </g>
 </g>
</template>
<style>
rect.table{
 stroke: #000000;
 stroke-width: 3px;
 fill: #ffffff;
}
</style>
<script>
 import seat from "./seat.vue";
import config from "./config";

export default {
 props: ['members'],
 methods: {
  seatX(col){
   return col * (config.seatWidth + config.seatMargin);
  },
  seatY(line){
   return line * config.table.width + config.seatHeight + config.table.margin * 2;
  },
 },
 computed: {
  line0(){
   return this.members.filter( (d, i)=> (i+1)%2);
  },
  line1(){
   return this.members.filter( (d, i)=> i%2);
  },
  width(){
   return Math.max(this.line0.length, this.line1.length) *
    (config.seatWidth + config.seatMargin) -
    config.seatMargin;
  },
  height(){
   return config.table.width;
  },
  fullHeight(){
   return this.height + (config.seatHeight + config.table.margin) * 2
  },
  y(){
   return config.seatHeight + config.table.margin;
  },
 },
 components: {seat},
};
 </script>
