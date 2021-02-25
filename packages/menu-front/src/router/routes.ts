// Disable return types for import functions
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Directly import Home view for faster rendering of first page
import * as Parcel from '@/components/LoadParcel';
import Playground from '@/components/playground/Playground.vue';

/** See https://router.vuejs.org/fr/essentials/navigation.html for help */
export const routes = [
	{
		path: '/vue-dot',
		component: Playground
	},
	{
		path: '/satisfaction-cli-front/**',
		name: 'satisfaction-cli-front',
		component: Parcel.ParcelSCF
	},
	{
		path: '/accueil-front/**',
		name: 'accueil-front',
		component: Parcel.ParcelAccueilFront
	}
];
