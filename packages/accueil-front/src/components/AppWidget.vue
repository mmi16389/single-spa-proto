<template>
	<div
		class="pa-2 col-md-4 col-sm-6 col-xs-12 flex-wrap d-flex"
		:data-cy="'widget-'+widgetCode"
	>
		<v-card
			class=" grey lighten-3"
			tile
			height="100%"
		>
			<v-card-title
				:class="'title white--text w-100 ' + $t('components.widgets.' + widgetCode + '.color')"
			>
				{{ $t('components.widgets.' + widgetCode + '.title') }}
			</v-card-title>
			<v-card-text class="mt-3">
				{{ $t('components.widgets.' + widgetCode + '.text') }}
			</v-card-text>
			<v-card-actions>
				<VBtn
					:class="'white--text ' + $t('components.widgets.' + widgetCode + '.color')"
					:href="$t('components.widgets.' + widgetCode + '.link')"
				>
					Consulter
				</VBtn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			widgetCode: {
				type: String,
				default: undefined
			}
		}
	});
	@Component
	export default class AppWidget extends Props {
	}
</script>
