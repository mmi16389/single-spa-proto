import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

export let mountParcel: any;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#admin",
    render: (h: any) => h(App),
    router,
    vuetify,
  },
});

export const bootstrap = [
  (props: any) => {
    mountParcel = props.mountParcel;
    return Promise.resolve();
  },
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
