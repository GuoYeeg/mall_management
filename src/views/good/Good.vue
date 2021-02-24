<template>
  <div class="">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" > </el-table-column>
      <el-table-column prop="name" label="商品名称" > </el-table-column>
      <el-table-column prop="is_new" label="新品">
        <template v-slot="scope"> 
          {{scope.row.is_new? '是' : '否'}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 70, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPages">
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
      totalPages:0,
      pageSize:10,
    };
  },
  methods:{
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
        page:this.currentPage,
        size:this.pageSize
      }).then((res)=>{
        if(res.errno==0){
          this.tableData=res.data.data
          this.totalPages=res.data.count
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
</style>