<template>
<div >
  <div id="mobile" v-if="this.getmbFlg" >
  <thismobile> </thismobile>
  </div>
  <div id="app"  v-if="!this.getmbFlg">
    
     <thishead> </thishead>
     <thisnav>  </thisnav>
     <router-view></router-view>

    <div id="footer"> <thisfooter></thisfooter>  </div>
 </div>
  
</div>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex'
import footer from './components/footer'
import head from './components/head'
import navbar from './components/navbar'
import mobile from './components/mobile/mobile'
export default {
computed:{
  ...mapGetters([
  'getmbFlg',
  
  ])},

components: {
    
    thishead: head,
    thisfooter: footer,
    thismobile: mobile,
    thisnav: navbar
    
  },
  name: 'app',
 methods: {
    show(){
      var that=this
      $(document).ready(function () {
        
        $(function () { 
         
          var scre=document.body.clientWidth;
            
          if(scre<=960 &&  that.getmbFlg == false){
             
           that.$store.dispatch('tooglemobilestate')
         
          }
          
         
         
           
        }); 
      }); 
    }
 },
 mounted  () {
  this.show()
 }
}
</script>

<style>

html { 
   overflow-x:hidden;
 
   
 }
img{
  max-width: 100%;
}

  
#app {
  width:150rem;
  margin:0 auto;
 // overflow-x:scroll;
  //  -ms-overflow-x:scroll;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
}

</style>
