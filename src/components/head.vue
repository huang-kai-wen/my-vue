<template>
<div id="f-1">

<el-row :gutter="0" id="f-2">
  
  <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="11"><div class="logal">&nbsp;</div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">安全有机食品农场</el-col>
  
</el-row>
<img id="pho" src="../../static/images/tel.jpg"  alt="电话"/>
<div class="container">
<div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "><a  @click="changembprompt()"></a>

   </div >
   <div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "><a ><router-link to="/regis">注册</router-link ></a>

   </div >
  <div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "><a  @click="changeusersee()">登录</a>

   </div >
   
   <div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "><a  @click="usercenter()">购物车</a>

   </div >
   <div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "> <a>{{this.getnewuser.username}}</a>
   </div >
   <div class="col-xs-3 col-sm-1" 
         style="margin-left:2rem;
         "><a @click="logout()">注销</a>
   </div >
 </div >     
  
  
  <div id="foo3"   v-if="this.getusesee"><thisforuser ></thisforuser></div>
 </div>

</template>

<script>
import { mapGetters, mapActions  } from 'vuex'
import foruser from './foruser'
export default {
  

 methods: {
 

    changeusersee() {
     this.$store.dispatch('toogleusestate','usesee')
    },
    changembprompt() {
      var scre=document.documentElement.clientWidth
      if(scre<=920){
      this.$store.dispatch('tooglemobilestate')
      }else{
       alert("我想，嗯.......  你用的不是手机")
      }
    },
     logout:function(formName){
               this.$store.dispatch('userlogout',"")
               window.location.href ="http://aokxf.com";
      
      },
   usercenter() {
    this.$router.push({
     path: '/user'
     });
    }
  },

 computed:{
  ...mapGetters([
  'getusesee',
  'getnewuser',
  'getmbprompt',
  ])},
 components: {
    thisforuser:foruser

         }
   }
</script>

<style >
#f-1 { 
 width: 153rem; 
 } 
 #f-2 { 
background-image: url(../../static/images/new-banner.jpg);
 } 
#foo3 { 
      width: 100%; 
        height:68.5rem; 
          margin-top:-2rem; 
        margin: 0; 
        padding: 0; 
        position: absolute; 
         z-index:20; 
    } 


   .logal{ background-image: url(../../static/images/logo.jpg);background-repeat: no-repeat ;}
   .el-row {
    height:17rem;
    width: 100%;
  
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;

    }
  }
 
 .el-col {

    border-radius: 4px;
  }
 #pho{position:absolute;top:2rem;left:115rem;opacity:0.5;
filter:alpha(opacity=50);}
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 .container{
  position:absolute;
  left:75rem;
  top:21rem;
 }
 .col-xs-3 {
  width: 10rem;
 }

</style>
