<template>
  <div class="LoginPage">
    <div class="LoginPage_box">
      <p class="LoginPage_box_title">商城管理系统</p>
      <el-form :model="ruleForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item  prop="username">
          <el-input 
            type="text" 
            v-model="ruleForm.username" 
            autocomplete="off"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item  prop="pwd">
          <el-input 
            type="password" 
            v-model="ruleForm.pwd" 
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>
 
<script>
import {LoginApi} from '@/request/api.js'
export default {
  name: 'Login',
  data () {
    return {
      ruleForm:{
        username:'',
        pwd:'',
      },
      rules:{
        username:[
          { required: true, message: '账号不可为空', trigger: 'blur' },
          { validator:this.wordlimite ,message:'3-20个字符' ,trigger:'blur'}
        ],
        pwd:[
          { required: true, message: '密码不可为空', trigger: 'blur' },

        ]
      }
    }
  },
  // created(){
  //   console.log(LoginApi);
  // },
  methods: {
    wordlimite(rule, value, callback){
      if(value.length<3 || value.length>20){
        callback('3-20个字符')
      } else{
        callback()
      }
    },
    submitForm(formname){
      this.$refs[formname].validate((valid,unpass)=>{
        if(valid){ //校验成功
          // console.log(valid);

          LoginApi({
            password:this.ruleForm.pwd,
            username:this.ruleForm.username
          }).then(res=>{
            if(res.errno==0){
              localStorage.setItem('mall-managment-token',res.data.token)
              this.$router.push('/')
            }
            
            
          })
        } else{ //校验不成功
          console.log(unpass);
        }
      })
    }
  },
}
</script>
 
<style scoped lang = "less">
.LoginPage{
  width: 100vw;
  height: 100vh;
  background-color: #324057;
  position: relative;
  
  .LoginPage_box{
    width: 330px;
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    margin: 30vh auto;
    text-align: center;
    .LoginPage_box_title{
      color: #FFF;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
</style>