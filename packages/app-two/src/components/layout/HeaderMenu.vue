<template>
	<VMenu
		content-class="rounded"
		transition="scale-transition"
		origin="top center"
		offset-y
		left
	>
		<template #activator="{ on }">
			<VBtn class="text-left text-none px-4 mr-4" text large v-on="on">
				<VLayout tag="span" class="text-right" column>
					<b>{{ $t("components.layout.headerMenu.user") }}</b>
					{{ $t("components.layout.headerMenu.role") }}
				</VLayout>

				<VIcon size="32px" color="grey darken-1" class="ml-2 pa-1">
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

			<VBtn block large tile class="primary--text">
				<VIcon color="primary" class="mr-2">
					{{ logoutIcon }}
				</VIcon>

				{{ $t("components.layout.headerMenu.logout") }}
			</VBtn>
		</div>
	</VMenu>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { RawLocation } from "vue-router";

import { mdiAccount, mdiLogoutVariant } from "@mdi/js";

interface LinkItem {
	title: string;
	disabled: boolean;
	to?: RawLocation;
}

/** User profile button in the HeaderBar */
@Component
export default class HeaderMenu extends Vue {
	// Icons
	userIcon = mdiAccount;
	logoutIcon = mdiLogoutVariant;

	get links(): LinkItem[] {
		return (this.$t(
			"components.layout.headerMenu.links"
		) as unknown) as LinkItem[];
	}
}
</script>
