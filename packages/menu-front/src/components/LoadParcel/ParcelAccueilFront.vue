<template>
	<div id="parcelHomeFront" />
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	// const HomeParcel = import('@cnamt/home-parcel')
	import { mountParcel } from '../../main';

@Component({})
	export default class ParcelAccueilFront extends Vue {
		mounted() {
			this.loadParcel();
		}
		loadParcel() {
			const domElement = document.getElementById('parcelHomeFront');
			/* global System */
			mountParcel(
				() =>
					System.import('accueil-front') ,
				{ domElement }
			);
		}
	}
</script>