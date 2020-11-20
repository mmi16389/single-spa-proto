<template>
  <div id="app">
    <Header title="App single-spa" />
    <HomeParcel />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HomeParcel from "./components/HomeParcel.vue";
import { tileComponent, Header } from "@cnamts/shared-module";

@Component({
  components: {
    HomeParcel,
    Header,
  },
})
export default class App extends Vue {
  created() {
    // console.log(' return ', tileComponent('bi'))
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
