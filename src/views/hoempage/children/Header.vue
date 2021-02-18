<template>
  <div class="header">
    <div class="header_l">
      <p class="header_l_title">商品管理系统<i class="el-icon-menu" @click="toCollapse"></i></p>
      
    </div>
    <div class="header_r">
      <p class="username" name="user">admin<i class="el-icon-caret-bottom"></i></p>
      
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Header',
  data () {
    return {
      msg:'Welcome to your vueName',
      isCollapse:false
    }
  },
  methods:{
    toCollapse(){
      this.bus.$emit('clicktoCollapse',!this.isCollapse)
      this.isCollapse=!this.isCollapse
    }
  }
}
</script>
 
<style scoped lang = "less">
  .header{
    height: 11vh;
    line-height: 11vh;
    display: flex;
    justify-content: space-between;
    background-color: #409EFF;
    padding: 0 15px;
    color: #FFF;
    i{
      margin-left: 5px;
    }
    .header_l{
      font-size: 2.2rem
    }
    .header_r{
      font-size: 1.4rem;
    }

  }
  
</style>