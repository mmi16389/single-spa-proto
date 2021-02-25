<template>
	<!-- VApp is an element which is required to use Vuetify. See https://vuetifyjs.com/en/ for help -->
	<VApp
		v-cloak
		class="main-ctn"
	>
		<NotificationBar data-cy="notificationBar" />

		<VMain>
			<Home />
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import Home from './views/Home.vue';

	import { Meta, MetaInfo } from '@/decorators';

/** App is the main component */
@Component({
  components: { Home }
})
	export default class App extends Vue {
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
