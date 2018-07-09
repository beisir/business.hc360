import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import App from './App';
import routerConfig from './router';
Vue.use(Router);
const router = routerConfig(Router);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
