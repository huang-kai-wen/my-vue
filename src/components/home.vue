<template>
<div>
   <thiscomtain></thiscomtain>
   
    <thishid></thishid>  
    <div id="show"><thispre></thispre> </div>
</div>    
</template>

<script>
import pre from './home/predecessor'
import product from './home/product'
import comtain from './home/comtain'
import mhid from './home/hid'
export default {
  components: {
    thiscomtain: comtain,
    
    
    
    thispre: pre,
    thishid: mhid
  },
  name: 'app'
}
 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show {height:32rem;width:123rem;float:right;position:absolute;top:28rem;left:21rem;
       overflow:hidden;      
 }
</style>
