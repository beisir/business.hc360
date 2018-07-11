
import routes from './routes';

export default (Router) => {
    return new Router({
        mode: 'history',
        routes,
        base: '/base/',
        fallback: true
    });
};
