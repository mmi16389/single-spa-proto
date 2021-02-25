import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';

import { RootState } from './types';

// Use the notification module from Vue Dot
import { notification } from '@cnamts/vue-dot/src/modules/notification';
import { userStore } from './user';

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence<RootState>({
	key: 'menu-front',
	storage: window.localStorage
});

Vue.use(Vuex);

/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const storeOptions: StoreOptions<RootState> = {
	strict: true,
	state: {
		version: '1.0.0'
	},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		notification,
		userStore
	},
	plugins: [vuexLocal.plugin]
};

export const store = new Vuex.Store<RootState>(storeOptions);
