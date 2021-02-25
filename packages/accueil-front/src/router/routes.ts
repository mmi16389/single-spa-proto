// Disable return types for import functions
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Directly import Home view for faster rendering of first page
import Home from '@/views/Home.vue';

/** See https://router.vuejs.org/fr/essentials/navigation.html for help */
export const routes = [
	{
		path: '/accueil-front/home',
		name: 'home',
		component: Home
	}
];
