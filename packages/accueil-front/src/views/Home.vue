<template>
	<v-container>
		<div class="d-flex mb-6 justify-start flex-wrap">
			<AppWidget
				v-for="widget in orderedWidgets"
				:key="widget.id"
				:widget-code="widget.code"
			/>
		</div>
	</v-container>
</template>

<script lang="ts">
	import Vue from 'vue';
	import _ from 'lodash';
	import Component from 'vue-class-component';
	import AppWidget from '../components/AppWidget.vue';

	import { Meta, MetaInfo } from '@/decorators';
	import { getWidgets } from '@/services/assure/api.ts';
	import { Widget } from '@/types';

/** Home page */
@Component({
	// Vuex bindings
	components: { AppWidget }
})
	export default class Home extends Vue {
	widgets = [] as Widget[];

	get orderedWidgets(): Widget[] {
		return _.orderBy(this.widgets, 'id');
	}

	beforeCreate() {
		getWidgets().then((response) => {
			this.widgets = response.data;
		});
	}

	/* istanbul ignore next */
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: this.$t('views.home.meta.title') as string,
			meta: [
				{
					name: 'description',
					content: this.$t('views.home.meta.description') as string
				}
			]
		};
	}
	}
</script>
