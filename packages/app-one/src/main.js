// import './set-public-path'
// import './parcels/helloWord';
// import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

// export let mountParcel

// Create main Vue instance
new Vue({
  render: (h) => h(App),
}).$mount("#app"); // Mount it on #app (in public/index.html)

// Vue.config.productionTip = false
// const singleSpa = singleSpaVue({
//   Vue,
//   appOptions: {
//     render: (h) => h(App)
//   }
// })

// export const bootstrap = [
//   (props) => {
//     mountParcel = props.mountParcel
//     return Promise.resolve()
//   }
// ]
// export const mount = [
//   singleSpa.mount
// ]
// export const unmount = [
//   singleSpa.unmount
// ]

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue-app",
    render: (h) => h(App),
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
