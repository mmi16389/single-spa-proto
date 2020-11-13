import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app-one",
  app: () => System.import("app-one"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
