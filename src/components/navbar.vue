<template>

  <div class="hello">
   <ul class="nav nav-pills">
      <li ><a href="#"><router-link to="/">&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;首页</router-link ></a></li>
      <li><a href="#"><router-link to="/aboutfarmer">农场介绍</router-link ></a></li>
      <li><a href="#"><router-link to="/aboutus">关于我们</router-link ></a></li>
     <li ><a href="#"><input type="text" class="form-control" id="lastname" placeholder="搜索产品"></a></li>
   </ul>

  </div>
</template>

<script>
            
                       
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello{background-color:#808080;}
#lastname{width:30rem;margin-left:1rem;}
.form-control{margin-left:55rem;width:25rem;}
.navbar-header a{width:135rem;color:red}
</style>
