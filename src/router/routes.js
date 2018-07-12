export default [
    {
        name: '根目录',
        path: '/',
        redirect: '/signIn',
        hidden: true
    },
    {
        name: '首页',
        path: '/home',
        meta: {
            requireAuth: true
        },
        component: resolve => {
            require.ensure(['../view/index'], () => {
                resolve(require('../view/index'));
            });
        }
    },
    {
        name: '注册',
        path: '/register',
        meta: {
            requireAuth: true
        },
        component: resolve => {
            require.ensure(['../view/register'], () => {
                resolve(require('../view/register'));
            });
        }

    },
    {
        name: '登录',
        path: '/signIn',
        meta: {
            requireAuth: true
        },
        component: resolve => {
            require.ensure(['../view/signIn'], () => {
                resolve(require('../view/signIn'));
            });
        }
    }
];
