<template>
  <div id="detai">
  <div id="dd">
     <div id="detaiimg">
           
           <pic-zoom url="../../static/images/jiyu.jpg" :scale="3"></pic-zoom>
 
     </div>
     <div id="detaitab">
        <el-row>
           <el-col :span="24"  ><div class="pro">{{this.proobj.title}}</div></el-col>
       </el-row>
       <el-row>
           <el-col :span="18"><div class="pro">{{this.proobj.poin}}</div></el-col>
       </el-row>
        <el-row>
           <el-col :span="20"><div class="pro"> <el-button type="info" plain disabled>{{this.proobj.price}}元/kg,购买数量</el-button></div>
           <el-button plain v-bind:disabled="this.beDisabled"  @click="reducecount ()">-</el-button><span>&nbsp;&nbsp;&nbsp{{this. count}}&nbsp;&nbsp;&nbsp</span>
           <el-button plain @click="  addcount ()">+</el-button>

           </el-col>
       </el-row>
        <el-row>
           <el-col :span="15"><div class="pro">  <el-button type="success" plain><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true">加入购物车</span></el-button>
             <el-button type="primary" plain>点击购买</el-button>
            </div></el-col>
           </el-row>
     </div>
  </div>
     <div id="detaiinst">
     <p>{{this.proobj.instruction}}</p>
     </div>
  </div>
</template>

<script> 
import PicZoom from './piczoom'

import { mapGetters, mapActions  } from 'vuex'
export default {

  data () {
    return {
     beDisabled: false,
     count: 1, 
     proobj: {}, 
    }
  },
  name: 'App',
components: {
 PicZoom
 },

  computed:{
  ...mapGetters([
  'allProducts',
  ])},
 methods: {
  getproid () {
      var proid=this.$route.params.id 
       
      var indexpro
     for(let p = 0;p<this.allProducts.length;p++ ){if(this.allProducts[p].id==proid){this.proobj=this.allProducts[p];console.log(this.proobj.id)}}
      
    }, 
  addcount () {
      this.count++
      this.beDisabled=false
  }, 
  reducecount () {
  
  if(this. count==1){this. beDisabled=true}else{this.count--}

  }  
 },
  mounted () {
    this.getproid ();
   



      
  } 
}
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#detaiimg{position:relative;float:left;}
#detaitab{position:relative;float:left;margin-left:3rem;height:25rem;}
#detai{margin-left:38rem;width:100rem;}
#detaiinst{width:80rem;float:left;}
.pro{float:left;}
.el-row {
    height:4.5rem;
    width: 45rem;
    background-image:none ;
    
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;

    }
  }
</style>
