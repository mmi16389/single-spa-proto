import { registerApplication, start } from "single-spa";

registerApplication({
  name: "layout-app",
  app: () => System.import("layout-app"),
  activeWhen: ["/"],
});

registerApplication({
  name: "admin-app",
  app: () => System.import("admin-app"),
  activeWhen: ["/admin"],
});

// registerApplication({
//   name: "@cnamts/navbar",
//   app: () => System.import("@cnamts/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});