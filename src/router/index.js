
import routes from './routes';
import VueRouter from 'vue-router'
import { axiosHttp } from '@/util/http'

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/base/',
  fallback: true
});

/**
 * 全局导航前置守卫
 */
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)

  // 是否有权限
  // axiosHttp.get('/login/isLogin').then(res => {
  //   console.log(res);
  // })
  next()
})


/**
 * 全局导航后置守卫
 */
router.afterEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
})



export default router
