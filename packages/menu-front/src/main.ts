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
import './components/examples';
import './plugins/vue-dot';
import './plugins/webfontloader';
import { router } from '@/router';

// Import application parts
import App from './App.vue';
import { store } from './store';
import { i18n } from './i18n';
import { CreateElement } from 'vue/types/umd';

// Remove "tip" from browser console
Vue.config.productionTip = false;

Vue.config.productionTip = false;

export let mountParcel: any;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#menu-front',
    render: (h: CreateElement) => h(App),
    store,
    i18n,
    vuetify,
    router
  }
});

export const bootstrap = [
  (props: any) => {
    mountParcel = props.mountParcel;
    return Promise.resolve();
  }
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;