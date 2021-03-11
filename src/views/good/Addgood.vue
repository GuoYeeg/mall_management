<template>
  <div class="addgood">
    <el-tabs type="border-card">
      <el-tab-pane label="基础信息">
        <el-form class="add_form" ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="所属分类" prop="type">
            <el-select v-model="form.category" placeholder="请选择所属分类" >
              <el-option :label="item.name" :value="item.id" v-for="item in categoryOp" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属品牌" prop="brand">
            <el-select v-model="form.brand" placeholder="请选择所属品牌" >
              <el-option :label="item.name" :value="item.id" v-for="item in brandOp" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品简介" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="商品图片" >
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
          </el-form-item>
          <el-form-item label="商品单位" prop="unit">
            <el-input v-model="form.unit"></el-input>
          </el-form-item>
          <el-form-item label="商品库存" prop="stock">
            <el-input v-model.number="form.stock"></el-input>
          </el-form-item>
          <el-form-item label="商品售价" prop="price">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="推荐类型" prop="recomtype">
            <el-checkbox-group v-model="form.recomtype">
              <el-checkbox label="新品" name="is_new"></el-checkbox>
              <el-checkbox label="人气" name="is_hot"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="上架">
            <el-switch v-model="form.is_onsale"></el-switch>
          </el-form-item>
          <el-form-item label="排序" prop="sort">
            <el-input v-model.number="form.sort"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
      <el-tab-pane label="商品详情">商品详情</el-tab-pane>
    </el-tabs>

  </div>
</template>
 
<script>
import {UploadGoodPicApi,GetCategoryApi,GetBrandApi,AddGoodApi} from '@/request/api'
export default {
  name: 'EditePage',
  data () {
    return {
      msg:'Welcome to your vueName',
      imageUrl:'',
      categoryOp:[],
      brandOp:[],
      form:{
        recomtype:[],
        category:'',
        name:'',
        brand:'',
        desc:'',
        unit:'',
        stock:'',
        price:'',
        sort:'',
        is_onsale:false
      },
      rules:{
        recomtype:[
          { required: true, message: '请输入推荐类型', trigger: 'blur' },
        ],
        type:[
          { required: true, message: '请选择所属分类', trigger: 'blur' },
        ],
        name:[
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        brand:[
          { required: true, message: '请输入所属品牌', trigger: 'blur' },
        ],
        desc:[
          { required: true, message: '请输入商品描述', trigger: 'blur' },
        ],
        unit:[
          { required: true, message: '请输入商品单位', trigger: 'blur' },
        ],
        stock:[
          { required: true, message: '请输入商品库存', trigger: 'blur' },
        ],
        price:[
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        sort:[],
      }
    }
  },
  created(){
    GetCategoryApi().then((res)=>{
      this.categoryOp=[...res.data.slice(141,148),...res.data.slice(300,304),...res.data.slice(153,175)]
    }).catch(err=>console.log(err))
    GetBrandApi({
      page:'35',
      size:'10',
      name:this.form.brand,
    }).then((res)=>{
      this.brandOp=res.data.data
    }).catch(err=>console.log(err))
  },

  methods:{
    onSubmit() {
      console.log(this.form);
      AddGoodApi({
        'category_id':this.form.category,
        'name':this.form.name,
        brand_id:this.form.brand,
        goods_number:this.form.stock,
        goods_brief:this.form.desc,
        goods_desc:'',
        sort_order:this.form.sort,
        is_delete:this.form.is_onsale?1:0,
        is_new:this.form.recomtype.indexOf('新品')!=-1?1:0,
        goods_unit:this.form.unit,
        primary_pic_url:this.imageUrl,
        list_pic_url:this.imageUrl,
        retail_price:parseFloat(this.form.price),
        is_hot:this.form.recomtype.indexOf('人气')!=-1?1:0,
        attribute:[],
        gallerys:[this.imageUrl]
      }).then((res)=>{
        if(res.errno==0){
          this.$message('添加商品信息成功')
        }
      })
    },
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
 .add_form{
   /* padding-right: 71%; */
   .el-input,.el-textarea{
     width: 215px;
   }
 }

 /* upload */
   .el-icon-plus{
    border: 2px dashed #d9d9d9!important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-icon-plus:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>