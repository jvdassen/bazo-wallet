// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import Translation from './config/Translation';
import router from './config/router';
import Toaster from './config/Toaster';
import Interceptor from './config/Interceptor';
import Bootstrap from './config/Bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import 'flag-icon-css/css/flag-icon.css';
import './global.scss';

Vue.use(VueResource);
Vue.config.productionTip = false;
Toaster.toast();
Interceptor.intercept();
Bootstrap.bootstrap();

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n: Translation,
	template: '<App/>',
	components: { App }
});
