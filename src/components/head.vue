<template>
<div>

<el-row :gutter="0">
  
  <el-col :xs="4" :sm="6" :md="8" :lg="2" :xl="11"><div class="logal">&nbsp;</div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1">安全有机食品农场</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="3" :xl="11">联系电话：15607812256</el-col>
</el-row>
<div class="container">
  <div class="col-xs-3 col-sm-1" 
         style="background-color: #dedef8;margin-left:2rem;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"><a @click="changeusersee()">注册/登录</a>
   </div >
   <div class="col-xs-3 col-sm-1" 
         style="background-color: #dedef8;margin-left:2rem;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"> <a >{{this.getnewuser.username}}</a>
   </div >
   <div class="col-xs-3 col-sm-1" 
         style="background-color: #dedef8;margin-left:2rem;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;"><a >注销</a>
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
    
      }
    },
 computed:{
  ...mapGetters([
  'getusesee',
  'getnewuser',
  ])},
 components: {
    thisforuser:foruser

         }
   }
</script>

<style>
#foo1{height:15rem;width:100%;background-color:#40E0D0 ;font-weight: bold;font-color:#000000 ;}
#foo1 span{text-align: center;;font-size:8rem;float:left;margin-top:2rem;margin-left:2rem;}
#foo1 li{text-align: center;font-size:5rem;float:left;margin-top:5rem;margin-left:2rem;list-style-type:none;}
#foo1 h1{text-align: center;font-size:4rem;margin-top:5rem;float:right;margin-right:14rem;}
#foo1 img{height:13rem;float:left;}

#foo2 {position:absolute;margin-left:120rem;margin-top:10rem;}
a:hover{color:red;cursor: pointer;display: inline;}
#foo2 a{text-align: center;;font-size:2rem;float:rights;margin-right:4rem;}

#foo3 {
        width: 100%;
        height:68.5rem;
         margin-top:-2rem;
        margin: 0;
        padding: 0;
        position: absolute;
        z-index:20;
   }
   .logal{ background-image: url(../../static/images/logo.jpg);}
   .el-row {
    height:17rem;
    width: 100%;
    background-image: url(../../static/images/new-banner.jpg);
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;

    }
  }
 .el-col {

    border-radius: 4px;
  }
  
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
  left:115rem;
  top:15rem;
 }

</style>
