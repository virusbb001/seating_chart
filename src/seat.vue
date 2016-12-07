<template>
 <g class="seat" :transform="translate">
 <rect x="1px" y="1px" :width="width + 'px'" :height="height + 'px'" class="seat" v-bind:class="{empty: isEmpty, seated: isSeated}" @click="toggleSeated"></rect>
 <text :x="textX + 'px'" :y="textY+'px'" :font-size="fontSize" pointer-events="none" text-anchor="middle" dominant-baseline="central">
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

rect.empty {
 fill: #dddddd;
}
</style>
<script>
 import config from "./config";

export default {
 computed: {
  isEmpty: function(){
   return !Boolean(this.name);
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
 data: function(){
  return {
   isSeated: false,
  };
 },
 methods: {
  toggleSeated(){
   if(this.isEmpty){
    return;
   }
   this.isSeated = !this.isSeated; 
  }
 },
 props: ['name', 'x', 'y'],
};
</script>
