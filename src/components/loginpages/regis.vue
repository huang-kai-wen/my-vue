<template >
         <div>
            <div id="v_container" style="width: 100px;height: 1140px;position: relative;top: -61px;left: 230px;">
                     11111
　　　　　　　　  <canvas id="verifyCanvas" width="100" height="40" style="cursor: pointer;"></canvas>
　　　　　　</div>
　　　　　　<input type="text" id="code_input" value="" placeholder="请输入验证码"/><button id="my_button">验证</button>
          </div>
  
</template>

<script>
import CryptoJS from "./../api/crypto.js"
//import {GVerify,sayhell}  from "./../api/GVerify.js"
    export default {
       data () {
            return {
                id0:null,
                id1:null,
                id2:null,
            }
        },

    methods: {
      
      
    },
    created(){
      
     
    }
 }
</script>

<style scoped>

    
  
</style>