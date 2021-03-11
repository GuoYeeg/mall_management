<template>
  <div class="good">
    <div class="sear_box">
      <el-input v-model="searinput" placeholder="商品名称" size="small" style="width:200px;margin:5px 10px 5px 0;"></el-input>
      <el-button type="primary" @click="searGood" size="small" >查询</el-button>
      <el-button type="primary" size="small" @click="$router.push('/addgood')">添加</el-button>
      <el-button type="primary" size="small">重置</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" > </el-table-column>
      <el-table-column prop="name" label="商品名称" width="240"> </el-table-column>
      <el-table-column prop="retail_price" label="售价" > </el-table-column>
      <el-table-column prop="goods_number" label="库存" > </el-table-column>
      <el-table-column prop="is_new" label="新品">
        <template v-slot="scope"> 
          {{scope.row.is_new? '是' : '否'}}
        </template>
      </el-table-column>
      <el-table-column prop="is_hot" label="人气" > </el-table-column>
      <el-table-column prop="is_on_sale" label="上架" > </el-table-column>
      <el-table-column prop="sort_order" label="排序" > </el-table-column>
      <el-table-column prop="操作" label="操作" >
        <el-button type="primary" size="small" @click="toEditePage">编辑</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 70, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItem">
    </el-pagination>
  </div>
</template>
 
<script>
import {GetGoodApi} from '@/request/api'

export default {
  name: "Good",
  data() {
    return {
      msg: "Welcome to your vueName",
      searinput:'',
      tableData:[],
      currentPage:1,
      totalItem:0,
      pageSize:10,
    };
  },
  methods:{
    searGood(){
      if(this.searinput==''){
        this.$message({
          message:'请输入查询内容',
          type:'error',
          duration:800
        })
        return
      }

      GetGoodApi({
        page:'1',
        name:this.searinput,
        size:'10'
      }).then((res)=>{
        this.tableData=res.data.data
        this.totalItem=res.data.count
      })
    },
    toEditePage(){
      this.$router.push('/editgood')
    },
    handleSizeChange(nums){
      this.pageSize=nums
      this.fetchGoodsData()
    },
    handleCurrentChange(curpage){
      this.currentPage=curpage
      this.fetchGoodsData()
    },
    fetchGoodsData(){
      GetGoodApi({
        page:this.currentPage+Math.floor((630/this.pageSize)),
        size:this.pageSize
      }).then((res)=>{
        if(res.errno==0){
          this.tableData=res.data.data
          // console.log(this.tableData);
          this.totalItem=res.data.count-10*63
          // this.totalItem=200
        }
      })
    }
  },
  created(){
    this.fetchGoodsData()
  }
};
</script>
 
<style scoped lang = "less">

.el-pagination{
  float: right;
}
.sear_box{
  width: 100%;
  float: left;

}
</style>