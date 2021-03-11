import Vue from 'vue'
import VueRouter from 'vue-router'
import {GetUserInfoApi} from '@/request/api'
import { SETMENU } from '@/store/mutation-types'

//引入vuex实例对象
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:()=>import('../views/login/Login.vue')
  },
  // {
  //   path:'/',
  //   component:()=>import('../views/hoempage/HomePage.vue'),
  //   children:[

  //   ]
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

//完整的路由规则
const routesArr={
  "/good":{
    path:'/good',
    component:()=>import('@/views/good/Good.vue')
  },
  "/attribute":{
    path:'/attribute',
    component:()=>import('@/views/attribute/Attribute.vue')
  },
  "/statdata":{
    path:'/statdata',
    component:()=>import('@/views/statdata/Statdata.vue')
  },
  "/addgood":{
    path:'/addgood',
    component:()=>import('@/views/good/Addgood.vue')
  }
}



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem('mall-managment-token')
  if(token && store.state.menu.length===0){ //第二个条件是为了next的时候不死循环
    GetUserInfoApi().then(res=>{
      // console.log(res);
      if(res.errno==0){
        //设置vuex中的menu权限
        store.commit(SETMENU,res.data.menu) 
        //生成用户可以访问的路由规则
        let actualRoutesArr=[]
        for(let i=0;i<res.data.menu.length;i++){
          let path=res.data.menu[i].path
          if(routesArr[path]){
            actualRoutesArr.push(routesArr[path])
          }
        }
        //动态添加路由规则
        router.addRoute({
          path:'/',
          component:()=>import('../views/hoempage/HomePage.vue'),
          children:actualRoutesArr
        })
        
      }
      next(to.path)
    })
    
  } else if(!token&& to.path!='/login'){
    next('/login')
  } else if(token && store.state.menu.length!=0 && from.path=='/login' && to.path=='/'){
    //生成用户可以访问的路由规则
    let actualRoutesArr=[]
    for(let i=0;i<store.state.menu.length;i++){
      let path=store.state.menu[i].path
      if(routesArr[path]){
        actualRoutesArr.push(routesArr[path])
      }
    }
    //动态添加路由规则
    router.addRoute({
      path:'/',
      component:()=>import('../views/hoempage/HomePage.vue'),
      children:actualRoutesArr
    })
    //跳转到首个功能页
    next(actualRoutesArr[0].path)
  }
  else{ 
    next() //最后的出口
  }
})
export default router
