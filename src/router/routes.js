export default [
    {
        name: '根目录',
        path: '/',
        redirect: '/home',
        hidden: true
    },
    {
        name: '首页',
        path: '/home',
        meta: {
            requireAuth: true
        },
        component: resolve => {
            require.ensure(['../components/index.vue'], () => {
                resolve(require('../components/index.vue'));
            });
        }
    }
];
