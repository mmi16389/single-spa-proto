<template>
  <div />
  <RouterView />
</template>
<script>
//import Home from "./views/Home.vue";
// import Container from "./views/Container.vue";
import { mapState } from 'vuex';

export default {
   computed: {
     ...mapState('storeUser', ['user']),
    /**  ...mapState('userStore', ['user'])*/
  },
  created(){
      console.log(this.user)
  }

};
</script>
<style scoped>
#single-spa-container {
  border: 1px solid red;
  width: 500px;
}
</style>