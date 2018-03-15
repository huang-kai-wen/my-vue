 <template>
<div class="foo5">
<div class="panel-group" id="accordion">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" 
                   href="#collapseOne" @click=" rechangeproducts ()">
                    水果蔬菜 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp  >
                </a>
            </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in">
            <div class="panel-body">
                
                <li><el-button type="info"   @click="changeproducts ('recommend',true)"> 荔枝</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">龙眼</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">柑子</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">葡萄</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">菜干</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">青枣</el-button></li>
                
            </div>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" 
                   href="#collapseTwo" @click=" rechangeproducts ()">
                    肉类 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp  >
                </a>
            </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
                <li><el-button type="info" @click="changeproducts ()">猪肉</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">鸡肉</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">鲫鱼</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">塘角鱼</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">泥鳅鱼</el-button></li>
                <li><el-button type="info" @click="changeproducts ()">黄鳝鱼</el-button></li>

            </div>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" 
                   href="#collapseThree" @click=" rechangeproducts ()">
                    新闻资讯 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp >
                </a>
            </h4>
        </div>
        <div id="collapseThree" class="panel-collapse collapse">
            <div class="panel-body">
            <li><el-button type="info" @click="changeproducts ()">新品上市</el-button></li>
            <li><el-button type="info" @click="changeproducts ()">系统通告</el-button></li>
                 
                
            </div>
        </div>
    </div>
</div>



</div>
</template>

<script>
export default {
methods: {
  changeproducts (c,fdv) {
      var payload
      var cds
     payload={cd:c,fd:fdv}
       console.log( payload.cd)
       this.$store.dispatch('resetProducts',payload)
        },
  rechangeproducts () {
          this.$store.dispatch('getAllProducts')
           
        }      
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{list-style-type:none;}
.panel-body li{
 display:block;margin-top:0.2rem;text-align:center;text-align: center;font-size:150%;cursor: pointer;
}
.foo5{float:left;}
.panel-title{height:6rem;text-align:center;margin-top:2rem;}
.panel-body li{height:4.5rem;}
</style>
 