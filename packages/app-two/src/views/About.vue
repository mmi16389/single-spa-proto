<template>
	<PageCard card-class="py-4 px-5">
		<h2 class="text-h6 font-weight-bold primary--text">
			{{ $t("views.about.title") }}
		</h2>

		<Links
			v-for="(data, index) in links"
			:key="index"
			:title="data.title"
			:links="data.links"
			class="mt-4"
		/>

		<VBtn
			:to="$t('views.about.backBtn.to')"
			color="accent"
			class="mt-8"
			outlined
			exact
		>
			<VIcon class="mr-2">
				{{ backArrowIcon }}
			</VIcon>

			{{ $t("views.about.backBtn.label") }}
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Meta, MetaInfo } from "@/decorators";

import { Link } from "@/types";

import { mdiArrowLeft } from "@mdi/js";

interface LinkItem {
	title: string;
	links: Link[];
}

/** About page */
@Component({
	components: {
		Links: () =>
			import(
				/* webpackChunkName: "links" */
				"@/components/Links"
			),
	},
})
export default class About extends Vue {
	backArrowIcon = mdiArrowLeft;

	get links(): LinkItem[] {
		return (this.$t("views.about.links") as unknown) as LinkItem[];
	}

	/* istanbul ignore next */
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: this.$t("views.about.meta.title") as string,
			meta: [
				{
					name: "description",
					content: this.$t("views.about.meta.description") as string,
				},
			],
		};
	}
}
</script>
