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
const methods = ['get', 'post', 'put', 'delete']

const http = {
  CancelToken: axios.CancelToken // 取消网络请求
}
methods.forEach(method => {
  http[method] = function() {
    // 如果是post请求
    let arg = arguments
    if (method === 'post') {
      if (!arguments[1]) {
        arg = [...arg, {}]
      }
      return axios[method](...arg, {
        headers: {
          'content-type' : 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      })
    }
    return axios[method](...arg)
  }
})

export default http

export const addRequestInterceptor =
  axios.interceptors.request.use.bind(axios.interceptors.request)

export const addResponseInterceptor =
  axios.interceptors.response.use.bind(axios.interceptors.response)
