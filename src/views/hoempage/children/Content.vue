<template>
  <div class="content" >
    <div class="content_main">
      <router-view/>
    </div>
    <div class="content_foot">
      <div class="content_foot_left"><strong> © 2016-2019</strong> GuoYeeg. All rights reserved.</div>
      <div class="content_foot_right"><strong>Version</strong> 1.0.0</div>
    </div>
  </div>

</template>
 
<script>

export default {
  name: 'Content',
  data () {
    return {
      msg:'Welcome to your vueName',
      isCollapse:false,
      navWidth:0,
      // fixWidth:{}
    }
  },
  computed:{
    fixWidth(){
      return {
          // marginLeft:this.isCollapse?'18vw':'250px',
          // height: 'calc(100% - 11vh)',
          // overflow: 'auto',
          // backgroundColor: 'red'
      }
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
.content{
  padding: 0 20px 0 20px ;
  background-color: #F0F0F0;
  height: calc(100% - 11vh);
  overflow: auto;
  overflow-y: hidden;
  margin: 0 !important;
  /* margin-left: -10px; */
  /* width: 100%; */
  /* background-color: #F0F0F0; */
  /* background-color: red; */
  transition: width .3s ease-in-out;
}
.content_main{
  width: 99%;
  height: 85%;
  margin: 30px 0 0 0 ;
  padding:  10px;
  background-color: #fff;
  overflow-y: scroll; 
  /* 内层设置好高度和宽度 外层滚动条隐藏 */
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);;

}
.content_foot{
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  bottom: 0;
}
</style>