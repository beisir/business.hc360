import Vue from 'vue';
import Router from 'vue-router';
import http from '@/util/http'
import App from './App';
import router from './router';
import {Menu, Submenu, MenuItem, Steps, Step, Input, Form, Button, ButtonGroup, FormItem, Checkbox, CheckboxGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../theme/index.css';
// import '../static/iconfont/css/font-awesome.min.css';
import store from './store'
Vue.use(http);
Vue.use(Router);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

// const router = routerConfig(Router);

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
});
