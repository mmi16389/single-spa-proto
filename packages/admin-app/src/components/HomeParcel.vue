<template>
  <div id="parcel">my god</div>
  <!-- <HomeParcel/> -->
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// const HomeParcel = import('@cnamt/home-parcel')
import { mountParcel } from "../remoteEntry";

@Component({})
export default class Home extends Vue {
  mounted() {
    this.loadParcel();
  }

  loadParcel() {
    const domElement = document.getElementById("parcel");
    /* global System */
    mountParcel(() => System.import("@cnamt/home-parcel"), { domElement });
    // mountRootParcel(() => System.import("sample-react-parcel"), { domElement })
  }
}
</script>
