<template>
	<VToolbar dense tag="nav" class="secondary flex-grow-0">
		<VTabs v-if="!maintenance" dark background-color="transparent">
			<VTab
				v-for="link in links"
				:key="link.label"
				:to="link.to"
				v-bind="link.options"
			>
				{{ link.label }}
			</VTab>
		</VTabs>
	</VToolbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Options } from "@cnamts/vue-dot/src/mixins/customizable";

interface ToolbarLink {
	label: string;
	to?: {
		name: string;
	};
	options?: Options;
}

declare const MAINTENANCE: string;

@Component
export default class AppToolbar extends Vue {
	get links(): ToolbarLink[] {
		return (this.$t(
			"components.layout.appToolbar.links"
		) as unknown) as ToolbarLink[];
	}

	get maintenance(): boolean {
		return MAINTENANCE === "true";
	}
}
</script>

<style lang="scss" scoped>
.v-tabs-bar {
	.v-tab:not(.v-tab--active):not(.v-tab--disabled) {
		color: #fff;
		opacity: 0.8;
	}
}
</style>
