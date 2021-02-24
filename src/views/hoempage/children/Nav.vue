<template>
  <div class="nav">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :collapse-transition="true"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#324157"
      text-color="#BFCBD9"
      active-text-color="#409EFF">
      <el-submenu :index="index+''" v-for="item,index in menuConfig" :key="item.title">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item :index="subitem.path" v-for="subitem,subindex in item.subarr" :key="subindex">
          <span slot="title">{{subitem.title}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
 
<script>
export default {
  name: 'Nav',
  data () {
    return {
      isCollapse:false,
      menuConfig:[
        {
          title:'商品管理',
          subarr:[
            {title:'商品列表',path:'/good'},
            {title:'商品分类',path:'/category'},
            {title:'品牌管理',path:'/brand'},
            {title:'商品属性管理',path:'/attribute'},
          ]
        },
        {
          title:'订单中心',
          subarr:[
            {title:'订单列表',path:'/order'},
          ]
        },
        {
          title:'店铺运营',
          subarr:[
            {title:'专题管理',path:'/topic'},
            {title:'运营数据',path:'/statdata'},
          ]
        },
      ]
    }
  },

  created(){
    //在bus上监听 clicktoCollapse 事件 控制是否折叠
    this.bus.$on('clicktoCollapse',(argus)=>{
      this.isCollapse=argus
    })

    //处理功能菜单数组 此生命周期data中数据已经准备完毕
    let arr=[
      {id: 3, user_id: 2, path: "/category", path_name: "分类页面"},
      {id: 4, user_id: 2, path: "/good", path_name: "商品页面"},
      {id: 6, user_id: 2, path: "/order", path_name: "订单页面"}
    ]
    arr=this.$store.state.menu
    var arrObj=arr.reduce((pre,cur)=>{
      pre[cur.path]=cur
      return pre
    },{})

    // console.log(arrObj);

    var initMenu=this.menuConfig
    var actualArr=[]
    for(var i=0;i<initMenu.length;i++){
      var item={title:'',subarr:[]}
      for(var j=0;j<initMenu[i].subarr.length;j++){
        // console.log(initMenu[i].subarr[j].path);
        if(arrObj[initMenu[i].subarr[j].path]){
          item.title=initMenu[i].title
          item.subarr.push(JSON.parse(JSON.stringify(initMenu[i].subarr[j])))
          // console.log(initMenu[i].subarr[j]);
        }
      }
      if(item.title)
        actualArr.push(item)
    }
    // console.log(actualArr);
    this.menuConfig=actualArr
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