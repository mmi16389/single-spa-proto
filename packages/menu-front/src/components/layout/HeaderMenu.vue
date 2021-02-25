<template>
	<div>
		<VMenu
			content-class="rounded"
			transition="scale-transition"
			origin="top center"
			offset-y
			left
		>
			<template #activator="{ on }">
				<VBtn
					class="text-left text-none px-4 mr-4"
					text
					large
					v-on="on"
				>
					<VLayout
						tag="span"
						class="text-right"
						column
					>
						<!-- <b>{{
							getUser ? getUser.name : $t("components.layout.headerMenu.role")
						}}</b> -->
						<b>
							{{ $t("components.layout.headerMenu.role") }}

						</b>
						{{ $t("components.layout.headerMenu.role") }}
					</VLayout>

					<VIcon
						size="32px"
						color="grey darken-1"
						class="ml-2 pa-1"
					>
						{{ userIcon }}
					</VIcon>
				</VBtn>
			</template>

			<div class="white">
				<VList>
					<VListItem
						v-for="(item, index) in links"
						:key="index"
						:disabled="item.disabled"
						:to="item.to ? item.to : null"
						exact
					>
						<VListItemTitle>{{ item.title }}</VListItemTitle>
					</VListItem>
				</VList>

				<VBtn
					block
					large
					tile
					class="primary--text"
					@click="showDialog"
				>
					<VIcon
						color="primary"
						class="mr-2"
					>
						{{ logoutIcon }}
					</VIcon>

					Ajouter utilisateur
				</VBtn>
			</div>
		</VMenu>
		<DialogBox
			v-model="dialog"
			title="Données d'Utilisateur"
			@cancel="dialog = false"
			@confirm="submit"
		>
			<!-- <User
				ref="form"
				@dialog-event="setDialog($event)"
			/> -->
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { mdiAccount, mdiLogoutVariant } from '@mdi/js';
	import User from '../login/User.vue';
	import { Refs } from '../../types';
	import { mapActions, mapGetters } from 'vuex';

interface LinkItem {
  title: string;
  disabled: boolean;
  to?: RawLocation;
}

interface FormElement {
  submitForm: () => void;
}

/** User profile button in the HeaderBar */
@Component({
  components: {
	User
  },
  methods: {
    ...mapActions('userStore', ['addUser'])
  }
})
	export default class HeaderMenu extends Vue {
  $refs!: Refs<{
    form: FormElement;
  }>;
  user = {};
  // Icons
  userIcon = mdiAccount;
  logoutIcon = mdiLogoutVariant;
  dialog = false;

  get getUser(): any {
    return this.user;
  }

  get links(): LinkItem[] {
    return (this.$t(
      'components.layout.headerMenu.links'
    ) as unknown) as LinkItem[];
  }

  showDialog() {
    this.dialog = true;
  }
  setDialog($event: any) {
    this.user = $event.user;
    this.addUser($event.user);
    this.dialog = $event.modal;
  }
  submit() {
    this.$refs.form.submitForm();
  }
	}
</script>
