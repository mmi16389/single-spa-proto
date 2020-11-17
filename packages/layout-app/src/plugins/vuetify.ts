import Vue from "vue";

// Import vuetify/lib to use vuetify-loader
import Vuetify from "vuetify/lib";

import fr from "vuetify/src/locale/fr";

Vue.use(Vuetify);

export const vuetify = new Vuetify({
	icons: {
		iconfont: "mdiSvg",
	},
	lang: {
		locales: { fr },
		current: "fr",
	},
});
