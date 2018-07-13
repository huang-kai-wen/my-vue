<template>
 <div  id="map">

  <div id="calcu">
     <p>右图红点位置即鱼塘所在位置</P>
     <p>您可以先驾车到钦州市再到长滩镇再到高床岭然后打开电脑打开英雄联盟插眼TP到指定位置</P>
    

<div id="ap">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change=" handleChange">
    </el-cascader>
   
    <input type="text" class="form-control" id="name" placeholder="请输入道路名称" v-model="street" @change="changemyder">
    <input type="text" class="form-control"  placeholder="地址" v-model="finalderection">
 </div> 
 








  </div> 
 <div id="container"></div> 











 </div>   
</template>

<script>
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
    data () {
      return {
       
         options: regionDataPlus,
        selectedOptions: [],
        street:"",
        finalderection:"",
      }
    },
    methods: {
        handleChange (value) {
        console.log(CodeToText[value[0]])
        this.finalderection=""
        this.street=""
       },
        
       changemyder(){
         for(var i=0;i<=this.selectedOptions.length-1;i++){
         this.finalderection=this.finalderection+CodeToText[this.selectedOptions[i]]
        }
       this.finalderection=this.finalderection+this.street
       this.loadmapapi()
       },
       loadmapapi(){
      
      
         var map = new BMap.Map("container");    
         var point = new BMap.Point(108.578909, 22.27692);    
         map.centerAndZoom(point, 15);    
         var marker = new BMap.Marker(point);           
         map.addOverlay(marker);  
         map.enableScrollWheelZoom(true);
            var  driving = new BMap.DrivingRoute(map, {    
                 renderOptions: {    
                 map: map,    
                 autoViewport: true    
                }    
           });    
           driving.search(this.finalderection, "钦州市钦北区长滩镇新勤村");
    } 

    },
   mounted(){
    this.loadmapapi()
    },
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map *{float:left;}
#calcu{height:auto;width:30rem;margin-top:3.5rem;text-align: left;margin-left:1.5rem;
}
#ap >:first-child{width:30rem;}
#calcu p{margin-left:1.5rem;border-bottom: 1px solid gray;}
#container{height:50rem;width:115rem;margin-left:1.5rem;}
</style>
