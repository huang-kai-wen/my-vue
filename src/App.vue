<template>
  <div id="app">

   <thishead>  </thishead>
     <thisnav>  </thisnav>
    <thiscomtain></thiscomtain>
     <thisfooter></thisfooter>
      <thishid></thishid>
      
     <div id="show"><router-view/></div>
   
  </div>
</template>

<script>

import head from './components/head'
import navbar from './components/navbar'
import footer from './components/footer'
import comtain from './components/comtain'
import mhid from './components/hid'
export default {

components: {
    thiscomtain: comtain,
    thishead: head,
    thisfooter: footer,
    thisnav: navbar,
    
    thishid: mhid
  },
  name: 'app'
}
</script>

<style>
#show {height:32rem;width:123rem;float:right;position:absolute;top:28rem;left:21rem;
       overflow:hidden;      
 }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
