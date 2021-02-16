import request from './request'

export const LoginApi = (pramas) => request.post('/admin/auth/login',pramas)