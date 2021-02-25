<template>
	<form>
		<v-text-field
			v-model="user.name"
			label="Prénom"
		/>
		<v-text-field
			v-model="user.pname"
			label="Nom"
		/>
		<v-text-field
			v-model="user.email"
			label="E-mail"
		/>
		<v-select
			v-model="select"
			:items="items"
			label="Item"
		/>
	</form>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

@Component
	export default class User extends Vue {
  select = null;
  user = {};
  items = ['Monsieur', 'Madame', 'Mademoiselle'];

  submitForm() {
    if (this.user) {
      this.$emit('dialog-event', { user: this.user, modal: false });
    }
  }
	}
</script>
