import HelloWorld from "./components/HelloWorld.vue";
import Vue from "vue";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#vue-app",
    render: (h) => h(HelloWorld),
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
