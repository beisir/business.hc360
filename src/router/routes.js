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
            require.ensure(['../view/index'], () => {
                resolve(require('../view/index'));
            });
        }
    }
];
