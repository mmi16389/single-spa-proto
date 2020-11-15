<template>
	<FooterWrapper>
		<FooterBtn inert>
			{{ $t("components.layout.appFooter.versionLabel") }} {{ version }}
		</FooterBtn>

		<FooterBtn inert>
			{{ $t("components.layout.appFooter.date") }}
		</FooterBtn>
	</FooterWrapper>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import FooterBtn from "@cnamts/vue-dot/src/patterns/FooterWrapper/FooterBtn";

/** The application footer */
@Component({
	components: {
		FooterBtn,
	},
})
export default class AppFooter extends Vue {
	version = "1.0.1"; //process.env.VUE_APP_VERSION;
}
</script>
