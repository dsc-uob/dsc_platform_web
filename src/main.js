import axios from "axios";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
	baseURL: "https://api.dsc-iq.cf/",
});

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
