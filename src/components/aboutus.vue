<template>
 <div  id="map">

  <div id="calcu">
     <p>右图红点位置即鱼塘所在位置</P>
     <p>您可以先驾车到钦州市再到长滩镇再到高床岭然后打开电脑打开英雄联盟插眼TP到指定位置</P>
    














  </div> 
 <div id="container"></div> 


<div class="docs-methods">
        <form class="form-inline">
            <div id="distpicker">
                <div class="form-group">
                    <div style="position: relative;">
                        <input id="city-picker3" class="form-control" readonly type="text" value="广东/广州市/番禺区/石楼镇"
                               data-toggle="city-picker">
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-warning" id="reset" type="button">reset</button>
                   

                   
                 
                </div>
            </div>
        </form>
   
</div>








 </div>   
</template>

<script>
export default {

    methods: {
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
driving.search("中关村", "钦州市钦北区长滩镇新勤村");
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
#calcu p{margin-left:1.5rem;border-bottom: 1px solid gray;}
#container{height:50rem;width:115rem;margin-left:1.5rem;}
</style>
