import axios from 'axios'

import {Message} from 'element-ui'

const instance =axios.create({
  timeout:15000,
  baseURL:'http://kumanxuan1.f3322.net:8360'
})

//请求拦截器
instance.interceptors.request.use(configs=>{
  let token=localStorage.getItem('mall-managment-token')
  if(token){
    configs.headers=configs.headers || {}
    configs.headers['X-Nideshop-Token']=token
  }
  return configs;
},err=>{
  return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(result=>{
  let data=result.data
  if(data.errno!==0){ // 
    Message({
      message:'Errno'+data.errno+':'+data.errmsg||'网络请求错误',
      type:'error'
    })
  }
  return result.data;
},err=>{
  return Promise.reject(err)
})

export default instance