/**
 * @author caoxu
 * addRequestInterceptor
 * addResponseInterceptor
 */
import axios from 'axios'

const defaultHeaders = {
  'Accept': 'application/json; charset=UTF-8',
  'Content-Type': 'application/json; charset=UTF-8',
  'Cache-Control': 'no-cache',
  'content-type' : 'application/x-www-form-urlencoded;charset=utf-8;',
}

// 设置超时时间
axios.defaults.timeout = 20 * 1000
<<<<<<< HEAD
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 全局请求头
axios.defaults.baseURL = 'http://newmyweb.hc360.com'

// 允许请求携带cookie
axios.defaults.withCredentials = true

const methods = ['get', 'post', 'put', 'delete'];

=======
const methods = ['get', 'post', 'put', 'delete']
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
>>>>>>> origin/master
const http = {
  CancelToken: axios.CancelToken.source() // 取消网络请求
}
methods.forEach(method => {
  http[method] = function() {
    return axios[method](...arguments)
  }
})

export default http

export const addRequestInterceptor =
  axios.interceptors.request.use.bind(axios.interceptors.request)

export const addResponseInterceptor =
  axios.interceptors.response.use.bind(axios.interceptors.response)
