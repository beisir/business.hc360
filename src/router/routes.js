
import index from '../view/index'; // 主页面

// 首页
const home = r => require.ensure([], () => r(require('../view/home')), 'home')

export default [
    {
        name: '根目录',
        path: '/',
        redirect: '/index',
        hidden: true
    },
    {
        name: 'index',
        path: '/index',
        meta: {
            requireAuth: true
        },
        component: index,
        children: [ // 二级路由
          {
            name: 'home',
            path: '/home',
            component: home
          }
        ]
    },
    {
        name: 'register',
        path: '/register',
        meta: {
            requireAuth: true
        },
        component: r => require.ensure([], () => r(require('../view/register')), 'register')

    }
];
