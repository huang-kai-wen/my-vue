<template>
  <div id="product1" >
              
                <div class="main-product-fl" >
                    <span id="prev" class="btn prev"></span>
                    <span id="next" class="btn prev"></span>
                   
                    <div class="main-product-pic" id="product" >
                        
                        <ul id="product-pic" v-bind:style="styleObject" @mouseenter="clerar()" @mouseleave="runInv()">

                          
                             <li v-for="(items,index) in this.allProducts"   >
                            <router-link :to="{ name:'prodetail', params: {id:items.id } }">     <img  :src="items.src"  alt="标本1"/></router-link> 
                            </li>
      
      
                        </ul>
                       
                        <div id="slider-page">
                        <div id="slider-b">
                           <span><el-button type="primary" icon="el-icon-arrow-right" size="small" ></el-button>
                           </span>
                             <ul>
                          <a v-for="(items,index) in this.allProducts" ref="mybox">
                        
                            </a>
                            
                            
                           
                            </ul>
                            <span> <el-button type="primary" icon="el-icon-arrow-left" size="small"></el-button>
                            </span>
                            </div>

                         </div>
                        </div> 
        
                              
                    </div>      
                 
        </div>
</template>

<script>

import { mapGetters, mapActions  } from 'vuex'
export default {

 data () {
    return {
       index: 1,
       i: true,
        ind: 0,
      styleObject: {
      
  left:"0em"
  }
    }

  },
  
  
       
 
  created () {
    this.$store.dispatch('getcookieuser')
    this.$store.dispatch('getAllProducts')
  },
  computed:{
  ...mapGetters([
  'allProducts',
  ])},
 
  
methods: {
  
   clerar () {
      clearInterval(this.invId0)
      clearInterval(this.invId)
    },
  
    goto (index) {
      
      this.styleObject.left=-index*40+"rem"
    },
    movestep(index){
        clearInterval(this.invId0)
        this.invId0 = setInterval(() => {if(this.ind>500){ clearInterval(this.invId0);this.ind=0;
        }else{this.ind++;this.styleObject.left=-index*40-this.ind*0.08+"rem";}} ,1)
     
      
    },
 
  runInv () {
      
      this.invId = setInterval(() => {
      if(this.index==this.allProducts.length-2){
      this.index=1
      this. movestep (1)
      }else{
      

      this.index++
     this.movestep(this.index)

      this.addclass()
      
        }
       
      
      },3000)
    }, 
    clearInv () {
      clearInterval(this.invId)
      
    },  
    addclass () {
        var index=this.index
         if(typeof(this.$refs.mybox[index])=="undefined"){ return undefined}else{
         this.$refs.mybox[index].style.backgroundColor = "red";
         this.$refs.mybox[index-1].style.backgroundColor = "#67C23A";
         
         if(this.index==2){this.$refs.mybox[this.allProducts.length-2].style.backgroundColor = "#67C23A";}} 
        
    },  
 }, 
   mounted () {
    this.runInv();
      
      
  }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{list-style-type:none;}
#product1{height:60rem;width:135rem;float:left;overflow:hidden;

}

#product-pic{height:25rem;width:8000rem;position:absolute;}
#product-pic li{float:left;margin-left:5rem;margin-bottom:2rem;height:25rem;}
#product-pic li:first-child{float:left;margin-left:0rem;}
#product-pic li img{height:25rem;width:35rem;}


#slider-page{position:absolute;height:32rem;width:125rem;top:28rem;background-color:#808080;
background-color: rgba(112, 128, 105, 0.5);   
}
#slider-b{margin-right:5rem;}
#slider-b span {height:3.5rem;width:4rem;margin-right:0.2rem;}
#slider-b span *{height:3.5rem;font-size:2rem;float:left;margin-top:0.2rem;}
#slider-page *{float:right;font-size:3rem;margin-left:1.5rem;}
#slider-page ul a:hover{background-color:red;}
#slider-page ul a{background-color:#67C23A;border-radius:15px;width:1.5rem;height:1.5rem;margin-top:1.5rem;}
.active{background-color:red;}

</style>
