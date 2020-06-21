import Vue from 'vue';
import VueAxios from "vue-axios";
import axios from "axios";
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

import router from "@/resources/Router";

Vue.use(Antd);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
