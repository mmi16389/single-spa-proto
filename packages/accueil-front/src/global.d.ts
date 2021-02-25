import { VuexBindings } from './store/types';

declare module 'vue/types/vue' {
	/* eslint-disable @typescript-eslint/no-empty-interface */
	interface Vue extends VuexBindings {
		// Here you can add types for plugins
		// that don't have typings
	}
}

declare global {
	// Declare env vars
	interface Window {
		VUE_APP_ENV: string;
		// Base URL of Axios requests
		API_URL: string;
		API_KEY: string;
		//Mock
		MOCK_API: string;
	}
}
