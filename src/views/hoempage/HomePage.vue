<template>
  <div class="homePage">
    <Header/>
    <Nav/>
    <Content/>



  </div>
</template>
 
<script>
import Header from './children/Header'
import Nav from './children/Nav'
import Content from './children/Content'
export default {
  name: 'HomePage',
  data () {
    return {
      msg:'Welcome to your vueName',
    }
  },
  components:{
    Header,
    Nav,
    Content
  }
}
</script>
 
<style scoped lang = "less">
.homePage{
  height: 100%;
  width: 100vw;
}
</style>