<template>
  <div id="app">
    
     <thishead> </thishead>
     <thisnav>  </thisnav>
     <router-view></router-view>

    <div id="footer"> <thisfooter></thisfooter>  </div>

  </div>
</template>

<script>
import footer from './components/footer'
import head from './components/head'
import navbar from './components/navbar'

export default {

components: {
    
    thishead: head,
    thisfooter: footer,
    thisnav: navbar
    
  },
  name: 'app'
}
</script>

<style>

html { overflow-x:hidden; }


#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
