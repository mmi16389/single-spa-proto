import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "layout-app",
//   app: () => System.import("layout-app"),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "admin-app",
  app: () => System.import("@cnamts/admin-app"),
  activeWhen: (location) => true,
});

// registerApplication({
//   name: "@cnamts/navbar",
//   app: () => System.import("@cnamts/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
