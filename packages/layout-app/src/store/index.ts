import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import VuexPersistence from "vuex-persist";

import { RootState } from "./types";

// Use the notification module from Vue Dot
import { notification } from "@cnamts/vue-dot/src/modules/notification";

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence<RootState>();

Vue.use(Vuex);

/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const storeOptions: StoreOptions<RootState> = {
	strict: true,
	state: {},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		notification,
	},
	plugins: [vuexLocal.plugin],
};

export const store = new Vuex.Store<RootState>(storeOptions);
