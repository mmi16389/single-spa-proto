<template>
	<!-- VApp is an element which is required to use Vuetify. See https://vuetifyjs.com/en/ for help -->
	<VApp
		v-cloak
		class="main-ctn"
	>
		<AppHeader />

		<AppToolbar />

		<NotificationBar />

		<VMain
			role="main"
			style="margin-top:20px"
		>
			<!-- Transition between routes -->
			<transition
				name="fade"
				mode="out-in"
			>
				<!-- Load the component defined in the router for the current route -->
				<RouterView />
			</transition>
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from './decorators';

	// Static import for faster rendering
	import { AppHeader, AppToolbar, AppFooter } from './components/layout';

	import { Options } from '@cnamts/vue-dot/src/mixins/customizable';
	import { mapActions } from 'vuex';

interface ToolbarLink {
  label: string;
  to?: {
    name: string;
  };
  options?: Options;
}

	// Env var
	let MAINTENANCE: string;

/** App is the main component */
@Component({
  components: {
    AppHeader,
    AppToolbar,
    AppFooter
  }
})
	export default class App extends Vue {
		get links(): ToolbarLink[] {
			return (this.$t(
      'components.layout.appToolbar.links'
    ) as unknown) as ToolbarLink[];
		}

		get maintenance(): boolean {
			return MAINTENANCE === 'true';
		}
  /** The meta informations of the route */
  /* istanbul ignore next */
  @Meta
  metaInfo(): MetaInfo {
    return {
      // If no sub-components specify a metaInfo.title, this title will be used
      title: this.$t('common.meta.title') as string,
      // All titles will be injected into this template
      titleTemplate: this.$t('common.meta.titleTemplate') as string,
      meta: [
        {
          name: 'description',
          content: this.$t('common.meta.description') as string
        }
      ]
    };
  }
	}
</script>
<style lang="scss" scoped>
.main-ctn {
  background: #ededed !important;
}
.main-ctn.v-application--wrap {
  min-height: 100%;
}
</style>