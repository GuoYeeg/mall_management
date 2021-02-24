<template>
  <div class="">
    <el-upload
      class="avatar-uploader"
      action=""
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :http-request="uploadPic"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
 
<script>
import {UploadGoodPicApi} from '@/request/api'
export default {
  name: 'EditePage',
  data () {
    return {
      msg:'Welcome to your vueName',
      imageUrl:''
    }
  },
  methods:{
    uploadPic(file){
      console.log(file);
      let formdata=new FormData()
      formdata.append('good_pic',file.file)
      //整个formdata作为参数
      UploadGoodPicApi(formdata).then((res)=>{
        this.imageUrl=res.data.fileUrl
      })
    },
    handleAvatarSuccess(){ //	function(response, file, fileList)

    },
    beforeAvatarUpload(){ //function(file)
    }
  },
}
</script>
 
<style scoped lang = "less">
 
</style>