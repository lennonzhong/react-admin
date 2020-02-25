import axios from 'axios';
import { message } from 'antd';
const service = axios.create({
    timeout: 3000,
    baseURL: 'http://rap2.taobao.org:38080/app/mock/245469'
})


service.interceptors.request.use(request =>{
    request.headers['token'] = window.localStorage.getItem('token')|| '123'
    return request
})
service.interceptors.response.use(response=>{
    if(response.status == 200) {
        if(response.data.code == 1) {
            return response.data.data;
        }
        else {
            return response.data
        }
    }else{
        message.error('请求出错了');
        return Promise.reject({
            code: 0,
            errMsg: '出错了'
        })
    }
})


export const getArticleList = ()=>{
   return  service.get('/api/v1/artileList')
}