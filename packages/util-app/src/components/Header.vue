<template>
  <div>
    <v-app-bar green>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>MICROFRONTEND - {{ title }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
export default {
  data: () => {
    return {
      group: null,
      drawer: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
