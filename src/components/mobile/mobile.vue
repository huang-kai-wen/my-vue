<template>

<div   class="box">
  
<div id="fish" >
    
  <img  src="../../../static/images/new-banner.jpg"  alt="标本1"/>
     <div class="flex-container"> 
          <li class="flex-item"  @click="changetoogle()">首页</li>
          <li class="flex-item"  @click="changetoogle()">农场介绍</li>
          <li class="flex-item" >关于我们</li>
          <li class="flex-item" @click="buy()">购鱼流程</li>
      </div>
  </div> 

<div v-if="this.toogle" > 
  <div id="pic">
     <div id="myCarousel" class="carousel slide">
     <!-- 轮播（Carousel）指标 -->
     <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
     </ol>   
     <!-- 轮播（Carousel）项目 -->
     <div class="carousel-inner">
      <div class="item active">
         <img src="../../../static/images/tjy1.jpg" alt="First slide">
      </div>
         <div class="item">
      <img src="../../../static/images/tjy2.jpg" alt="Second slide">
         </div>
      <div class="item">
         <img src="../../../static/images/tjy3.jpg" alt="Third slide">
      </div>
     </div>
     <!-- 轮播（Carousel）导航 -->
     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
     <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
     </a>
     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
     <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
  </a>
  </div> 
  </div>

<div class="panel panel-default">
  <div class="panel-heading">
   <li>塘角鱼营养价值</li>
  </div>
  <div class="panel-body">
    
   <h4>塘角鱼又称胡子鲶、塘鲺鱼。主要分布于中国南方各地江河湖泊。
      胡子鲶科动物胡子鲶的肉。获得后，除去鳍与内脏，洗净鲜用。味甘，性平。能补脾益气，益肾兴阳。用于身体虚弱，小儿疳积;黄疸，慢性肝炎;鼻衄，时流时止，年久不断等。常与莲子、绿豆、大枣之类配用。此外，也用于肝肾不足，腰膝酸痛，阳痿。其肉嫩味美，可煎汤或煮粥食。
      中医认为，胡子鲶鱼味甘性温，有补中益阳，利小便，疗水肿等功效。
      鲶鱼营养丰富，每100克鱼肉中含水分64.1克、蛋白质14.4克，并含有多种矿物质和微量元素，特别适合体弱虚损、营养不良之人食用。

       除鲶鱼的鱼子有杂味不宜食用以外，全身是宝，鲶鱼是名贵的营养佳品，早在史书中就有记载，可以和鱼翅、野生甲鱼相媲美，它的食疗作用和药用价值是其他鱼类所不具备的，独特的强精壮骨和益寿作用是它独具的亮点。

      胡子鲶刺少肉多，肉质细嫩，营养价值较高，具有滋补，敛肌活血，治疗小儿疳积、妇女倒经及哮喘等作用。

     塘角鱼肉质细嫩，味道鲜美，肌肉刺少，营养丰富，很受人们喜爱。同时，它还具有收敛肌肉、愈合伤口的功效，可作为外科手术后病人的滋补佳品。<br>
     【营养成分】每100g鲶鱼肉含蛋白质14.4g,脂肪20.6g,热量1015.7kJ。<br>
     性味】甘、平、无毒。人脾、肾。<br>

   【功效】补血、滋肾,调中,兴阴。<br>

   【功能】滋阴养胃,催乳,利尿。主要用于脾胃不和,产后缺乳,浮肿,腰膝酸痛,鼻衄不止。<br>

  【验方】1.产后缺乳:用鲶鱼1条,去肠杂,熬汤,打荷包蛋,连续服用。2.治肾虚腰疼或耳聋:胡子鲶1条,黑豆100g,煮熟之。3.身体虚弱,经常鼻衄者:用胡子鲶l条,加糯米、油、盐熟食之,可断根。
   </h4>
  </div>
</div>



<div class="panel panel-default">
  <div class="panel-heading">
     <div id="ftl-11"><div id="qusta">当前食品安全条件下吃鱼知识问答</div></div>
  </div>
  <div class="panel-body">
  
    <h2>
      问题：鱼类污染主要有哪些?<br>
    </h2>

　　 <h3> 鱼体内的污
       染物主要来源于地理环境和人类活动造成的环境污染。生活在污水中的鱼，会富集水中的有毒金属和其他有害物质。在鱼类的各种污染物中，危害最大的是汞，它会侵犯人体中枢神经系统，造成语言和记忆障碍等，对胎儿和儿童尤为
        明显，可能会影响智力。
    </h3>
    <div class="signal">&nbsp</div>
    <h2>
       问题：鱼类遭污染，我们还能吃吗?<br>
    </h2>
    <h3>
　      即使鱼类有遭受污染的可能，吃鱼仍利大于弊。研究发现，吃鱼有助于保护视力、降低心脏病风险、促进发育、保护皮肤、提高脑力和精子数量、预防哮喘和关节疾病等。美国食品和药品管理局于今年初发   
       布的“鱼类消费建议”指出，成年人每周应食用2～3份低汞鱼或贝类，约227～340克(烹饪前的可食部重量)。常见低汞鱼包括鳕鱼、鲑鱼、胡子鲶等;
    </h3>
    <div class="signal">&nbsp</div>
    <h2>
     问题：有的鱼尝起来有煤油味，网上披露说是为了在运输过程中保持鱼的存活率，这是真的吗?<br>
    </h2>
    <h3>
　　  
      运输过程中为了保持鱼鲜活，有的商贩会加入孔雀石绿，不过这是非法的，也不会产生煤油味。煤油味或其他异味，可能是鱼本身来自被污染水体，或运输过程中受到污染，也可能是商贩加入汽油等化学物质刺激鱼活动造成的。具体原因很难推测，但只要鱼出现异味，就一定存在问题，消费者不应购买、食用。
    </h3>
    <div class="signal">&nbsp</div>
    <h2>
    　问题：怎么吃鱼可以将风险降到最低?<br>
    </h2>
    <h3>
　　除了鱼的种类，鱼龄和体型越大，体内积聚的有害物质就可能越多。建议买鱼选个头“八分大”左右的，如鲤鱼和武昌鱼以1斤半、鲫鱼0.5～1斤、塘角鱼0.2～0.4斤，草鱼4～5斤的为宜。吃鱼种类应尽量丰富些，有条件的话还应多吃些虾、蟹、蚝等贝类。可以通过望、闻、按来挑选鱼：好的鱼应该是鱼眼饱满凸出，角膜透明清亮、富有弹性，鱼身有透明的黏液，鳞片有光泽，且与鱼体贴附紧密，未有脱落;闻一闻鱼鳃，海水鱼应该具有咸腥味，淡水鱼则是土腥味，如果有酸味或煤油味等异味，就不要购买了;最后，用手指按压一下鱼身，好的鱼肉质结实有弹性，指压后凹陷立即消失。

　　烹调方法方面，蒸最为健康;煮或炖位居其次，部分营养可能会流失于汤水中;如果将鱼油炸，损失可就大了，不仅破坏DHA这类不饱和脂肪酸，使鱼失去低脂优势，还容易产生有害物质。需要提醒的是，鱼籽由于胆固醇较高，“三高”人群最好少吃或将其剔除,对于健康人群，鱼子是鱼热量最高的可食用部分。
    </h3>
  </div>
</div>





   </div> 

  
  
 

<div  id="about" v-if="!this.toogle" >
   <div id="pic">
     <div id="myCarousel" class="carousel slide">
       <!-- 轮播（Carousel）指标 -->
       <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
           <li data-target="#myCarousel" data-slide-to="2"></li>
       </ol>   
     <!-- 轮播（Carousel）项目 -->
     <div class="carousel-inner">
         <div class="item active">
               <img src="../../../static/images/gc1.jpg" alt="First slide">
         </div>
         <div class="item">
             <img src="../../../static/images/gc2.jpg" alt="Second slide">
         </div>
         <div class="item">
             <img src="../../../static/images/gc3.jpg" alt="Third slide">
         </div>
     </div>
         <!-- 轮播（Carousel）导航 -->
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
               <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
             <span class="sr-only">Previous</span>
          </a>
           <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
           <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
          </a>
     </div> 
  </div>
   <p>
    　上面几个图就是高床岭周边环境，鱼塘位于高床岭南麓，无工厂污染水源，荒郊野岭的，因为鱼老板没资金，我们的鱼主要以玉米粉和叫花生麸为主要食物，偶尔会给些彭霸牌的饲料让鱼改善伙食，鱼也不多，每年也就2500公斤每年，都是卖给附近居民，大家对高床岭也熟，你要是问我鱼塘附近自然条件如何，我会跟你说山蚊子多，咬人，毛毛虫多。大家都懂的东西就不花时间重复介绍了。
    </P>  
  </div>

<div id="footer" >
   <div id="log" class="flex">
   <div  id="f-33" >
      <img src="../../../static/images/logo.jpg" alt="Third slide" ><br>
      <span>&nbsp;</span><br>
      <img src="../../../static/images/erweima.jpg" alt="二维码" class="fl mt10" /><br>
      <span> 官方微信更多最新资讯<br>，请关注我们的公众号</span> 
   </div>
   </div>
   <div id="con" class="flex1">
       <li >高床岭现代农场 &nbsp;|&nbsp;绿色安全农产品生产基地</li><br>
       <li class="glyphicon glyphicon-earphone ">咨询热线：15607812256</li><br>
       <li class="glyphicon glyphicon-envelope ">E-mail：1054547034@qq.com</li><br>
        <span>地址(Add):广西钦州市长滩镇高床岭南麓</span><br>
       <span>备案号：桂ICP备4651321654号&nbsp;|&nbsp;高床农业&nbsp;</span> <br>
    </div>
    </div>

   
   

  

  

   
</div>    
</template>

<script>

export default {
   data () {
      return {
       toogle:true,
    }},
   methods: {
    changetoogle(){
      this.toogle=!this.toogle
    },
    buy(){
      alert("直接打13537030514电话咨询，老板抓鱼技术差，不确定能不能抓到")
    },
    show(){
      var that=this
      $(document).ready(function () {
        
        $(function () { 
          var scre=document.documentElement.clientWidth
          //var scre=window.screen.availWidth;
            var dpr=window.devicePixelRatio||1;
          
           

            
            var scre1=scre/10
            var  strscrel=scre1.toString();
            var  strscre2=scre1-20;
            var  strscre3=strscre2.toString();

            var  strscre=strscrel+"px";
            var  strscre2=strscre3+"px";
             $("html").css("font-size",strscre);

             $(".box").css("font-size", strscre2);

             // alert(dpr*scre)
        }); 
      }); 
    }
 },
  mounted  () {
   this.show()
  }  
}
 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  width:80%;
}
.box{
 
  width:10rem;
  overflow:hidden;
 background-color: lightgrey;
  height:auto;
  display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.item img{
width:10rem; 
height:7rem;
}
#fish{
  width:10rem;
  height:2.2rem;
   border-bottom-style:solid;
    border-bottom-color:#AAAAAA;
}
#fish img{
  width:10rem;
 
}
#pic{
  overflow:hidden;
  width:9.6rem;
  height:8rem;
  margin-left:0.3rem;
}
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 10rem;
    height: 1rem;
    
}
h2{font-size:0.5rem;}
h3{font-size:0.4rem;}
h4{font-size:0.3rem;}
span{font-size:0.2rem;}
li{ list-style-type:none;}
.flex-item {
   
    width: 2rem;
    height: 0.5rem;
    margin: 10px;
    list-style:none;
}
#tip{

   width: 10rem;
   height:auto;
   border-bottom-style:solid;
    border-bottom-color:#AAAAAA;
}
#ftl-11{
  width: 8.3rem; 
  background-color:#00FF00; 
  height: 0.8rem;
}
#qusta{
   font-size:0.5rem;
   width: 8.3rem; 
   height: 0.8rem;
   margin-left:0.5rem;
   -webkit-transform: skew(30deg);

    -moz-transform: skew(30deg);

    -o-transform: skew(30deg);

    transform: skew(30deg);

   background-color:#00FF00; 
}
#ft-22 li {

   list-style:none;
   width:10rem;
   border-width: 15px;
   width: 3.4rem;
   border-top-left-radius:0.2em 0.2em;
   border-top-right-radius: 0.1em 0.3em;
   border-bottom-right-radius: 10rem;
   border-bottom-left-radius: 0.1em 0.3em;
   background-color:#00FF00;
}

#ft-22{
  display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
     height: 0.5rem;
}
#tip p  {

 width: 10rem;


}

.signal{
   height: 0.1rem;
    width:10rem;
   border-bottom-style:solid;
    border-bottom-color:#AAAAAA;
}
#xuezi{
 width: 6rem;

}
#log{
  width:5rem;

  
}
#con{
  width:3.5rem;
}
#footer{
width:10rem;
height:5rem;
overflow:hidden;
margin-left:0.5rem;
margin-top:0.1rem;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-end;
    align-items: flex-end;
}
.flex{
  
  -webkit-flex: 2;
    flex: 1;
    overflow: auto;
}
.flex *{

  text-align: center;  
  font-size:0.3rem;
  margin:auto;
}
.flex1 *{font-size:0.3rem;
 height:0.5rem
}
.flex1{ 

  height:7rem;
   margin-left:0.5rem;
  flex: 2;
  display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
}
#about {
height: auto;

}

</style> 
