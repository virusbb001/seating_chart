<template>
 <g class="seat" :transform="translate">
 <rect x="1px" y="1px" :width="width + 'px'" :height="height + 'px'" class="seat" v-bind:class="{seated: isSeated}"></rect>
 <text :x="textX + 'px'" :y="textY+'px'" :font-size="fontSize" text-anchor="middle" dominant-baseline="central">
 {{ name }}
 </text>
 </g>
</template>
<style>
rect.seat{
 fill: #ffffff;
 stroke: black;
 stroke-width: 2px;
}
rect.seated {
 fill: #ffff00;
}
</style>
<script>
 import config from "./config";

export default {
 computed: {
  isSeated: function(){
   return Boolean(this.name);
  },
  translate: function(){
   return `translate(${this.x}, ${this.y})`;
  },
  fontSize: function(){
   return config.fontSize+"px";
  },
  width(){
   return config.seatWidth;
  },
  height(){
   return config.seatHeight;
  },
  textX(){
   return this.width/2;
  },
  textY(){
   return this.height/2;
  }
 },
 props: ['name', 'x', 'y'],
};
</script>
