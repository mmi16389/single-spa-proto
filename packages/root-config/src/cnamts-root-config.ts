import { registerApplication, start } from "single-spa";

//System.resolve('@cnamts/app-one', '//localhost:9000/dist/single-spa-vue-app.umd.js');

registerApplication({
  name: "@cnamts/app-one",
  app: () => System.import("@cnamts/app-one"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
