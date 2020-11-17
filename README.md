# Single Spa Framework Microfrontend

Ce proto est un exemple l'utilisation du framework `single-spa` basé sur l'architecture Micro Frontend.

## ROOT config

L'application `root-config-app` est le coeur, à laquelle on souscrit tous les micrfrontends: single-spa application
1 - `admin-app` : single-spa application[localhost:3001](http://localhost:3001/)
2 - `home-app` : single-spa application[localhost:3003](http://localhost:3003/)
3 - `layout-app` : single-spa application[localhost:3002](http://localhost:3002/)

---

# Running Demo

- Run `yarn serve` . cela permet en parellel de demarrer toutes les microfrontends
