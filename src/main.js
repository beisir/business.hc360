import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import routerConfig from './router';
Vue.use(Router);
const router = routerConfig(Router);
// const store = vuexConfig(Vuex);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
