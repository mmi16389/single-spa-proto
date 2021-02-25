import { createStore } from 'vuex';
import storeUser  from './assuree';
import VuexPersistence from 'vuex-persist';

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence({
	key: 'sfc-client',
	storage: window.localStorage
});


export const store = createStore({
    state: {
        version: '1.0.0'
    },
    modules: {
        storeUser
    },
    plugins: [vuexLocal.plugin]
});
