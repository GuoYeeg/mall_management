<template>
  <div class="">
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
      tableData:[],
      currentPage:1,
      totalItem:0,
      pageSize:10,
    };
  },
  methods:{
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
</style>