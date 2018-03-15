
<template>
<div>
  <el-table
    :data="pagedata"
    border
    style="width: 100%">
     <el-table-column
      label="图片"
      width="180">
      <template slot-scope="scope">
       <p id="instructions1"> <img  :src="scope.row.src"  alt="标本1" /></p>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="电话"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date"
      label="成交量"
      width="150">
    </el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="150">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="130">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
        <el-button type="text" size="small">购买</el-button>
      </template>
    </el-table-column>
  </el-table>
 <div class="block">
  
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
  </div>

</div>
</template>


<script>
  export default {
    

    data() {
      return {
        pagedata: [{ date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }],
        currentPage:0,
        tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          src:" ../../static/images/jiyu.jpg",
          zip: 200333
        }
        ]
      }
    }
    ,

methods: {

    

    handleCurrentChange: function(currentPage){
       var step
        this.currentPage = currentPage;
         
        this. pagedata=this.tableData.slice( (this.currentPage-1)*3, (this.currentPage-1)*3+3);

        console.log(this.currentPage)     
    }

}
  }
</script>
<style scoped>
#userform{
  height:20rem;
  overflow:hidden;
}
#instructions1{}
#instructions1 img{height:5rem;width:7rem}
</style>