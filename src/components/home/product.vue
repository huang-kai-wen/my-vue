<template>
<div id="pro">
   <div id="hot" class="ff-31">
      <h2>热卖产品</h2>
      <li v-for="(items,index) in this.hotsel"   > <prochild  v-bind:url="items.src"  description="先到先得，售完为止,鲜活三周玲灰背银鲫"  :presentBooleam="!items.recommend"  :proid="items.id" :price="items.price">
      </prochild></li>
   </div>
   <div id="sel" class="ff-31  " >

     <li  class="ff-38" v-for="(items,index) in this.allsell"   >
           <prochild  v-bind:url="items.src"  description="先到先得，售完为止,鲜活三周玲灰背银鲫"  :presentBooleam="!items.recommend" :proid="items.id" :price="items.price">
           </prochild>
     </li>
     <div id="mypagebox">
        <ul class="pagination">
         <li @click="resetindexpage(-1)"><a>&laquo;</a></li>

          <li v-for="items in this.indexpage" @click="resetpro(items-1)"><a >{{items}}</a></li>
       
         <li @click="resetindexpage(1)"><a>&raquo;</a></li>
         </ul>
      </div>  
   </div>
</div>
</template>

<script scoped>
import { mapGetters, mapActions  } from 'vuex'
import prochild from './prochild'
export default {
   data () {
      return {
       hotsel:[],
       indexpage:[1,2,3,4,5],
       allsell:[]
     }},
 components: {
   prochild
 },
 computed:{
  ...mapGetters([
  'allProducts',
  ])},
   methods: {
    resetpro(index){
     this.allsell =this.allProducts.slice(index*18,index*18+18);
     console.log( this.allProducts.length)
    },
    resetindexpage(i){
      if(this.indexpage[0]==1&&i==-1){
       return
      }else{
        this.indexpage=this.indexpage.map((x)=>{return x+i})
      }
    }
 },
  created () {
   this.hotsel=this.allProducts.filter((x)=>{return x["recommend"]==false})
   console.log(this.hotsel.length)
   this. resetpro(0)
}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hot{
    text-align:left;
	width:33rem;
	margin-left:5rem;
	background-color:#BBFFEE;

}
 #sel{
      margin-top:5rem;
     margin-left:2rem;
    text-align:auto;
	width:110rem;
	
  height:210rem;
   
}
#pro {
    display:inline;
	width:151rem;
    height:300rem;
	
}
.ff-31{
    position:relative;

	float:left;
	display:inline;

	    
}
.pagination{
  
  font-size:2.5rem;
 
}
#mypagebox{
   position:absolute;
    top:200rem;
    left:50rem;
}
.ff-38{
    margin-top:1.5rem;
	float:left;

}
li{list-style-type:none;}
</style> 
