<template >
<div class="dialog">
    <div class="loginPage">
        <a @click="logsee()">登录</a> <a @click="regissee()">注册</a> <a @click="forgetsee()">忘记密码</a><p @click="closethis()">x</P> 
        <div class="usercomt">
       <div class="dialog1" v-if="this.getLogsee"><thislog></thislog> </div>
       <div class="dialog1" v-else-if="this.getregissee"><thisregis></thisregis> </div>
       <div class="dialog1" v-else-if="this.getforgetser"><thisforget></thisforget> </div>

    </div>
                
    </div>
    
</div>



	
</template>

<script>
   import forget from './loginpages/forgetpassword'
   import log from './loginpages/login'
   import regis from './loginpages/regis'
   import { mapGetters, mapActions  } from 'vuex'
   export default {
    methods: {
      logsee() {
          if(this.getforgetser==true){this.$store.dispatch('toogleusestate','forgetsee')};
          if(this.getregissee==true){this.$store.dispatch('toogleusestate','regissee')};
          if(this.getLogsee==false){this.$store.dispatch('toogleusestate','Logsee')}
         },
        regissee() {
          if(this.getforgetser==true){this.$store.dispatch('toogleusestate','forgetsee')};
          if(this.getLogsee==true){this.$store.dispatch('toogleusestate','Logsee')};
          if(this.getregissee==false){this.$store.dispatch('toogleusestate','regissee')}
         },
        forgetsee() {
          if(this.getLogsee==true){this.$store.dispatch('toogleusestate','Logsee')};
          if(this.getregissee==true){this.$store.dispatch('toogleusestate','regissee')};
          if(this.getforgetser==false){this.$store.dispatch('toogleusestate','forgetsee')}
         },
       closethis() {
         this.$store.dispatch('toogleusestate','usesee')
    
        }  
     },
   computed:{
      ...mapGetters([
      'getLogsee',
      'getforgetser',
      'getregissee',
     ])},
      components: {
          thisforget: forget,
          thislog: log,
         thisregis: regis, 
        }
    }

</script>

<style>
    a:hover{color:red;}
    .dialog{
          width: 100%;
        height: 100%;
      background: rgba(0,0,0,.8);
    }
    .loginPage {
       position: absolute;
        top: 50%;
        left: 50%;
        margin-top:-28rem;
        margin-left: -20rem;
        width: 350px;
        height: auto;
        min-height: 300px;
        padding: 30px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
        background-color: #fff; 
    }
    .loginPage a{
      font-size:2rem;
       position: relative;
       float: left;
        width: 30%;
        height: 3rem;
        border-bottom-style: solid;

        border-color:#1FBC37;
    }
    .loginPage p:hover{color:red;}
    .loginPage p{

      margin-top:-3rem;
      font-size:3rem;
    }
    .usercomt{
      position:absolute;
      width:300px;
      height:autox;
      margin-top:2rem;
      margin-left:0rem;
      
    }
	
</style>