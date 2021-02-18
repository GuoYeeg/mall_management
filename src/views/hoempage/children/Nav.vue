<template>
  <div class="nav">
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      :collapse-transition="true"

      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#BFCBD9"
      active-text-color="#BFCBD9">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="2">
          <span slot="title">商品管理</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-s-tools"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-s-management"></i>
        <span slot="title">订单中心</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-service"></i>
        <span slot="title">店铺运营</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
 
<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg:'Welcome to your vueName',
      isCollapse:false
    }
  },

  created(){
    this.bus.$on('clicktoCollapse',(argus)=>{
      this.isCollapse=argus
    })
  },
  beforeDestroy(){
    this.bus.$off('clicktoCollapse')
  }
}
</script>
 
<style scoped lang = "less">
  .nav{
    /* margin: 0 !important; */
    float: left;
    height: calc(100% - 11vh);
    .el-menu{
      /* margin: 0 !important; */
      border: 0 !important;
      height: 100%;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 18vw ;
      height: 100%;
    }

  }
</style>