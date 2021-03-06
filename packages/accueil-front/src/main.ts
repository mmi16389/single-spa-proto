// import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

// Polyfill for vue-input-facade on IE
// (not included in core-js)
import 'custom-event-polyfill';

// Register class components hooks
import Component from 'vue-class-component';

Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate'
]);

// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/webfontloader';

// Import application parts
import App from './App.vue';
import { i18n } from './i18n';
import { store } from './store';
import { CreateElement } from 'vue/types/umd';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		render: (h: CreateElement) => h(App),
		store,
		i18n,
		vuetify
	}
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
