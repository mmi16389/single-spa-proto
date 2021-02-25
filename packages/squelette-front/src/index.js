import { navigateToUrl, registerApplication, start } from "single-spa";

registerApplication({
	name: "menu-front",
	app: () => System.import("menu-front"),
	activeWhen: ["/"],
});

start();

/*
registerApplication({
	name: "accueil-front",
	app: () => System.import("accueil-front"),
	activeWhen: ["/home"],
});

registerApplication({
	name: "satisfaction-cli-front",
	app: () => System.import("satisfaction-cli-front"),
	activeWhen: ["/admin"],
});*/

/*
start({
	urlRerouteOnly: true,
});

navigateToUrl("/home");
*/
