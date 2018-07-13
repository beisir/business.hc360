/**
 * @author caoxu
 * addRequestInterceptor: 请求之前预处理
 * addResponseInterceptor： 请求之后预处理
 * 为vue实例添加http方法
 * Vue.use(http)
 */

import http, {
  addRequestInterceptor,
  addResponseInterceptor
} from './config'
import {
  Loading
} from 'element-ui'

export const axiosHttp = http

export default {
  install(Vue) {
    Vue.prototype.http = http
  }
}

/**
 * 请求前拦截
 */
let requestLoading;
addRequestInterceptor(
  config => {
    // console.log('config', config);
    requestLoading = Loading.service({
      fullscreen: true
    }) // 开启加载loading

    return config
  }, error => {
    requestLoading.close()
    return error
  }
)

/**
 * 响应拦截
 */
addResponseInterceptor(
  response => {
    requestLoading.close()
    return response.data
  }, error => {
    requestLoading.close()
    return error
  }
)
