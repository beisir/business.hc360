import routes from './routes.js';
export default (Router) => {
    return new Router({
        mode: 'history',
        routes,
        base: '/base/',
        fallback: true
    });
};
