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
}

// 设置超时时间
axios.defaults.timeout = 20 * 1000
const methods = ['get', 'post', 'put', 'delete']

const http = {
  CancelToken: axios.CancelToken // 取消网络请求
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
