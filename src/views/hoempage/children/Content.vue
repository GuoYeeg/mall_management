<template>
  <div class="content" :style="fixWidth">
    12
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
  height: calc(100% - 11vh);
  overflow: auto;
  margin: 0 !important;
  /* margin-left: -10px; */
  /* width: 100%; */
  /* background-color: #F0F0F0; */
  background-color: red;
  transition: width .3s ease-in-out;
}
</style>