import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
export let mountParcel: any;
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#admin",
    render: (h: any) => h(App),
    router,
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
