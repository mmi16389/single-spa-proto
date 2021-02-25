<template>
	<VAppBar
		height="80"
		color="white"
		class="app-header flex-grow-0"
	>
		<a
			:aria-label="$t('components.layout.appHeader.logoBtn.label')"
			:href="$t('components.layout.appHeader.logoBtn.link')"
			:disabled="maintenance"
			exact
			class="app-logo-link"
		>
			<img
				:alt="$t('components.layout.appHeader.logoBtn.alt')"
				src="@/assets/logo.svg"
				width="155px"
			>
		</a>

		<a
			:aria-label="$t('components.layout.appHeader.logoBtn.label')"
			:href="$t('components.layout.appHeader.logoBtn.link')"
			:disabled="maintenance"
			exact
			class="app-logo-link"
		>
			<img
				:alt="$t('components.layout.appHeader.logoBtn.alt')"
				src="@/assets/spa.jpg"
				width="155px"
			>
		</a>

		<div class="d-flex align-center flex-grow-1 app-header-title pr-1 py-2">
			<VDivider
				vertical
				inset
			/>

			<!-- <slot name="title">
				<VToolbarTitle class="text-h6 ml-4 ml-1">
				</VToolbarTitle>
			</slot> -->
		</div>

		<HeaderMenu v-if="!maintenance" />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderMenu from './HeaderMenu.vue';

	declare const MENU_FRONT_MAINTENANCE: string;

	declare const MENU_FRONT_VERSION: string;

/** The Header of the application */
@Component({
  components: {
    HeaderMenu
  }
})
	export default class AppHeader extends Vue {
		get maintenance(): boolean {
			return MENU_FRONT_MAINTENANCE === 'true';
		}

		get version() {
			return MENU_FRONT_VERSION;
		}
	}
</script>

<style lang="scss" scoped>
.app-header ::v-deep .v-toolbar__content {
  padding: 0;
}

.app-header-title {
  height: 100%;
}

.app-logo-link {
  height: 100%;
  display: flex;
  align-items: center;

  &:not([disabled]):hover {
    background: #eee;
  }

  &[disabled] {
    pointer-events: none;
  }
}
</style>
