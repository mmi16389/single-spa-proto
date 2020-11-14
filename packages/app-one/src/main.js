import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

export let mountParcel;

Vue.config.productionTip = false;
const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue-app",
    render: (h) => h(App),
  },
});

export const bootstrap = [
  (props) => {
    mountParcel = props.mountParcel;
    return Promise.resolve();
  },
];
export const mount = [singleSpa.mount];
export const unmount = [singleSpa.unmount];
