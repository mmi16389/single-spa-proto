import { VuexBindings } from './store/types';

declare module 'vue/types/vue' {
	/* eslint-disable @typescript-eslint/no-empty-interface */
	interface Vue extends VuexBindings {
		// Here you can add types for plugins
		// that don't have typings
	}
}

declare global {
	interface System {
		import(request: string): Promise<any>;
	}
	let System: System;
}