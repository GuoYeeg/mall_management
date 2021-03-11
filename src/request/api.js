import request from './request'
//登录
export const LoginApi = (params) => request.post('/admin/auth/login',params)
//根据token获取用户信息
export const GetUserInfoApi = (params) => request.post('/admin/auth/getUserByToken',params)
//请求商品信息 / 查询商品
export const GetGoodApi = (params) => request.get('/admin/goods',{params})
// 上传图片
export const UploadGoodPicApi = (params) => request.post('/admin/upload/goodNewPic',params)
//获取运营数据
export const GetStatApi = (params) => request.get('/admin/stat',{params})
//获取分类
export const GetCategoryApi = (params) => request.get('/admin/category',{params})
//获取品牌
export const GetBrandApi = (params) => request.get('/admin/brand',{params})
//新建编辑商品
export const AddGoodApi = (params) => request.post('/admin/goods/store',params)







