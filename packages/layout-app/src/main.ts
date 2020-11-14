import "./set-public-path";
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#layout-app",
    render(h: any) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
    vuetify,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
