<template>
	<div id="app">
		<div id="nav">
			<Admin />
		</div>
		<router-view />
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Admin from "./components/Admin.vue";
/** App is the main component */
@Component({
	components: {
		Admin,
	},
})
export default class App extends Vue {}
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
