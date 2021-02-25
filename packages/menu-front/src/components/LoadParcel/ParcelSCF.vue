<template>
	<div id="parcelSCF" />
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	// const HomeParcel = import('@cnamt/home-parcel')
	import { mountParcel } from '../../main';

@Component({})
	export default class ParcelSCF extends Vue {
		mounted() {
			this.loadParcel();
		}
		loadParcel() {
			const domElement = document.getElementById('parcelSCF');
			/* global System */
			mountParcel(() => System.import('satisfaction-cli-front'), {
				domElement
			});
		}
	}
</script>