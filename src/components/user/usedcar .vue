 <template>
 <div>
 <div  id="cat"  v-if="!this.cat"><img src="../../../static/images/cat.jpg"  alt="电话"/> </div>
<div class="foo6"  v-if="this.cat">


   <h1>购物车</h1>

   <div class="row">
      
      <div class="col-md-2" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
        下单日期
      </div>
      <div class="col-md-2" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
        产品
      </div>
      <div class="col-md-1" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
         单价
      </div>
      <div class="col-md-2" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
         数量
      </div>
      <div class="col-md-1" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
         总价
      </div>
      <div class="col-md-2" style="background-color: #dedef8;
         box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
         操作
      </div>

   </div>
   <div class="row" v-for="items in this.useprod">
      
      <div class="col-md-2" >
         
         <div class="heht"> <p><input type="checkbox" class="heht1" @click="addtomark(items)">{{items.time}}</p></div>
         
      </div>
      <div class="col-md-2" >
         <div class="heht"><img  :src="items.prodct.src"  alt="标本1"/><span>{{items.prodct.id}}</span></div>
      </div>
      <div class="col-md-1" >
         <div class="heht"><p>{{items.prodct.price | chineseYuan}}</p></div>
      </div>
      <div class="col-md-2" >
         <div class="heht"><p><el-button plain   @click="reducecount (items)">-</el-button>{{items.prodct.count}}
         <el-button plain @click="  addcount (items)">+</el-button></p></div>
      </div>
      <div class="col-md-1" >
         <div class="heht"><p>{{ items.prodct.count * items.prodct.price | chineseYuan }}</p></div>
      </div>
      <div class="col-md-2" >
         <div class="heht"><p><button type="button" class="btn btn-primary">结帐</button>
         <button type="button" class="btn btn-primary" @click="delectdata(useprod,items.time)"> 删除</button></p></div>
         

      </div>
   </div>

  <div id="opertation"><h1 @click="checkall">全选</h1><h1 @click="delectcheckal">取消全选</h1>
  <h1 @click="delectmark(useprod, marck)">删除</h1><h1>总价：{{ totalMoney | chineseYuan }}</h1><h1>结帐</h1></div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions  } from 'vuex'
export default {
  data () {
    return {
    cat:false,
     useprod: [],
     marck: [],
     totalMoney:0,
    }
  },
  computed:{
  ...mapGetters([
     'allProducts',
     'getnewuser',
     'getnewuser',
  ])},
  filters:{
    
    chineseYuan:function(val){
      if(!val) return '0';
      return '¥ ' + val.toFixed(2);
    }
  },
  methods: {
    totalmenory(){
       this.totalMoney=0
      this.useprod.forEach((val,index)=>{
         
        if(val.ischecked==true){
         
          this.totalMoney += val.prodct.count * val.prodct.price;
        }
      });
    },
    addcount (item) {
      item.prodct.count++
     this.totalmenory()
    }, 
    reducecount (item) {
       
     if(item.prodct.count<2){item.prodct.count=1}else{item.prodct.count--
      this.totalmenory()
     }

    },
    getusepro(){
      axios.post('http://aokxf.com/125',JSON.stringify({name:this.getnewuser.username})) 
      .then(response => {
      
       this.useprod=response.data
       console.log(this.useprod.length)
       if(this.useprod.length>0){this.cat=true}
      })
       .catch(err => {
       console.log(err);
      }) 
      
    },
    delectmark(arr,val){
       
       $('.heht1').prop('checked',false);
      for(var p=0; p<val.length; p++) {
        for(var i=0; i<arr.length; i++) {
          if(arr[i].time == val[p]) {
           arr.splice(i, 1);
           
           break;
          }
        }  
      }
      this.totalmenory()
    },
    addtomark(item){
      
      if(typeof item.ischecked === 'undefined'  ){
      
        //局部$set方法，在item里注册ischecked属性，赋值为true

        this.$set(item,'ischecked',true);
      }else {
        //点击反转属性值
        item.ischecked = !item.ischecked;
         
      };
      if( item.ischecked==true){this.marck.push(item.time)} 
      if( item.ischecked==false){
        for(var i=0; i<this.marck.length; i++) {
          if(this.marck[i] == item.time) {
           this.marck.splice(i, 1);
           console.log(111)
           break;
          } 
        }
      }
      this.totalmenory()
    },
    delectdata(arr,val){
       
     function calculate(arr,val){
       for(var i=0; i<arr.length; i++) {
          if(arr[i].time == val) {
           arr.splice(i, 1);
           break;
          }
        }
        return  arr;
      }
      this. postnewdata(calculate(arr,val))
    },
    checkall(){
       $('.heht1').prop('checked',true);
    },
    delectcheckal(){
     $('.heht1').prop('checked',false);
    },

    postnewdata(x){
      console.log(x)
       axios.post('http://aokxf.com/124',JSON.stringify({name:this.getnewuser.username,product:x})) 
       //http://aokxf.com/124
        .then(response => {
        console.log(response);
        

       }) 
      .catch(err => {
      console.log(err);
      })     
    
    },
  },

  created(){
   this.getusepro()

   
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cat{}
.heht{height:15rem;}
.heht p{height:3rem;margin-top:8rem}
.heht img{height:13rem;margin-top:5rem}
.foo6{float:left;width:100%;}
.row{margin-left:18rem;}
#opertation {float:left;margin-left:45rem;}
#opertation *{float:left;padding:1.5rem;border:5px;margin-left:4rem;background-color:gray;
}
#opertation h1:hover{color:red;}
</style>
 