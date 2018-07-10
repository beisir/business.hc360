import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import App from './App';
import routerConfig from './router';
import {Menu, Submenu, MenuItem, Steps, Step, Input, Form, Button, ButtonGroup, FormItem, Checkbox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/iconfont/css/font-awesome.min.css';
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Router);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Checkbox);
const router = routerConfig(Router);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
