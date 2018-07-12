
import routes from './routes';
import VueRouter from 'vue-router'

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
