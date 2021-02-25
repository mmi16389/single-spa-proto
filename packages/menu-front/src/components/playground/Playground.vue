<template>
	<PageCard :card-class="pageCardClass">
		<!-- Introduction -->
		<h2 class="text-h4 mb-12 font-weight-bold">
			Playground
		</h2>

		<!-- Examples -->
		<CopyBtnEx />

		<CustomIconEx />

		<DataListEx />

		<DatePickerEx />

		<DebounceEx />

		<DialogBoxEx />

		<DownloadBtnEx />

		<ErrorPageEx />

		<FileUploadEx />

		<FooterEx />

		<LangBtnEx />

		<NotificationEx />

		<PaginatedTableEx />

		<RulesEx />

		<SubHeaderEx />

		<TableToolbarEx />

		<UploadWorkflowEx />
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	/**
	 * Playground is a component that contains examples
	 * of the library component's
	 */
	@Component
	export default class Playground extends Vue {
	}
</script>

<style lang="scss" scoped>
	.vd-playground-app-bar {
		z-index: 10;
	}
</style>