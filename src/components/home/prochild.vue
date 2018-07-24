<template>

<div id="prochildbox">
   <router-link :to="{ name:'prodetail', params: {id:proid } }"><img :src="url" alt="" class="pic"></router-link>
     <div id="f-11">
        
        <span>￥：{{price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="given" v-if="presentBooleam">&nbsp;&nbsp;赠品&nbsp;&nbsp;</span>
      </div>
     <p>{{description}}</p>
</div>
</template>

<script>

export default {
   props:{
           price:{
                type:Number,
                default:2.5
            },
            proid:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
           description:{
                type:String,
                default:null
            },
          presentBooleam:{
                type:Boolean,
                default:false
            }
        },
   data () {
      return {
       
     }},
   methods: {
    
 },
  mounted  () {
   
}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#prochildbox{
  height:25rem;
  width:35rem;
  text-align:left;
  margin-bottom:5rem;
}
#prochildbox :hover{
  
   width:30.5rem
}
.pic {
  width:30rem
}
#given{
  background-color:red;
  color:white;
}
</style> 
