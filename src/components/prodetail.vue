<template>
  <div id="detai">

  
  <div id="dd" >
  <div id="detaiimg" >
            <pic-zoom :url="this.smallpic" :scale="3"></pic-zoom>

            
           <div id="smallpic" v-for= "items in this.proobj.smallpic" ><img  :src="items" @click="changgepic(items)"/>  </div>
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
           <el-col :span="15"><div class="pro">  <el-button type="success"  @click=" beforruter()" plain><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true" 
           >加入购物车</span></el-button>
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
import axios from 'axios';
import { mapGetters, mapActions  } from 'vuex'
export default {

  data () {
    return {
      cat: true,
       car: false,
    smallpic: "",
     beDisabled: false,
     count: 1, 
     proobj: {},
     todataproobj: [],
     olddataproobj: [], 
    
     }
  },
  name: 'App',
components: {
  PicZoom
 },
  
  computed:{
  ...mapGetters([
     'allProducts',
     'getnewuser',
     'getnewuser',
  ])},
 methods: {
  beforruter(){
    if(typeof(this.getnewuser.username)=="undefined" | typeof(this.getnewuser.username)==null | this.getnewuser.username==""){
    this.$store.dispatch('toogleusestate','usesee')
    }else{
      var p=this.getmysqldata()
      
      this.postdata(p)
    
                      
    }
  },
  
  getproid () {
      var proid=this.$route.params.id 
       
      var indexpro
     for(let p = 0;p<this.allProducts.length;p++ ){if(this.allProducts[p].id==proid){this.proobj=this.allProducts[p];}}
      
    },
 getmysqldata(){
    
   axios.post('http://192.168.0.7:3000/125',JSON.stringify({name:this.getnewuser.username})) 
   //aokxf.com/125
      .then(response => {
       if(response.data==null){return}else{
       this.olddataproobj=response.data
        
      console.log(response.data[0].time)
      console.log("旧的是"+ this.olddataproobj.length);
    }})
     .catch(err => {
      console.log(err);
    }) 
    
  },
  postdata(callback){
   var date = new Date();
   var seperator1 = "-";
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var strDate = date.getDate();
   var strhour = date.getHours();
   var strmimu = date.getMinutes();
   var strsec = date.getSeconds();        
    if (month >= 1 && month <= 9) {
            month = "0" + month; 
    }
    if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate+ seperator1 + strhour + seperator1 + strmimu + seperator1 + strsec  ;
       
      
       console.log("新的是"+this.olddataproobj.length);
       var c=this.olddataproobj;
       c.push({time:currentdate,prodct:this.proobj})
       
    var cl=[{time:currentdate,prodct:this.proobj}]
   
    console.log(this.getnewuser.username)
    axios.post('http://aokxf.com/124',JSON.stringify({name:this.getnewuser.username,product:c})) 
      .then(response => {
     console.log(response);
       callback

     }) 
     .catch(err => {
      console.log(err);
    })     
    
  }, 
  
  addcount () {
      this.count++
      this.beDisabled=false
  }, 
  reducecount () {
  
  if(this. count==1){this. beDisabled=true}else{this.count--}

  },
  changgepic(x){this.smallpic=x}
      
 },
  mounted () {
     this.getmysqldata()
     this.getproid ();
    this.smallpic=this.proobj.src
   


      
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
#smallpic img{height:8rem;width:10rem;float:left;margin-left:0.5rem;margin-top:0.8rem;}
.el-row {
    height:4.5rem;
    width: 45rem;
    background-image:none ;
    
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;

    }
  }
#winSelector{position:absolute; cursor:crosshair; filter:alpha(opacity=15); -moz-opacity:0.15; opacity:0.15; background-color:#000; border:1px solid #fff;}
</style>
