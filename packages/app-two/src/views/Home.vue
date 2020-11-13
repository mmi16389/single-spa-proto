<template>
	<PageCard min-height card-class="d-flex flex-column align-start py-4 px-5">
		<h2 class="text-h6 font-weight-bold primary--text mb-4">
			{{ $t("views.home.title") }}
		</h2>

		<p>{{ $t("views.home.description.block1") }}</p>

		<p>{{ $t("views.home.description.block2") }}</p>

		<RouterLink :to="$t('views.home.about.to')">
			{{ $t("views.home.about.label") }}
		</RouterLink>

		<VSpacer />

		<VBtn color="accent" outlined class="mt-8" @click="sendNotification">
			{{ $t("views.home.notify") }}
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Meta, MetaInfo } from "@/decorators";

import { mapActions } from "vuex";

import { mdiCheck } from "@mdi/js";

/** Home page */
@Component({
	// Vuex bindings
	methods: mapActions("notification", ["notify"]),
})
export default class Home extends Vue {
	/* istanbul ignore next */
	sendNotification(): void {
		this.notify({
			type: "success",
			message: "Exemple de notification",
			icon: mdiCheck,
		});
	}

	/* istanbul ignore next */
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: this.$t("views.home.meta.title") as string,
			meta: [
				{
					name: "description",
					content: this.$t("views.home.meta.description") as string,
				},
			],
		};
	}
}
</script>
