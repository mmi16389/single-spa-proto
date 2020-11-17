# Single Spa Framework Microfrontend

Ce proto est un exemple d'utilisation du framework `single-spa` basé sur l'architecture Micro Frontend.

## ROOT config

L'application `root-config-app` est le coeur auquel on souscrit tous les micrfrontends: single-spa application
1 - `admin-app` : single-spa application[localhost:3001](http://localhost:3001/)
2 - `home-app` : single-spa application[localhost:3003](http://localhost:3003/)
3 - `layout-app` : single-spa application[localhost:3002](http://localhost:3002/)

---

# Running Demo

- Installer les deps de chaque projet avec: `yarn ou npm i`
- Lancer separement chaque microfrontend(`admin-app`,`home-app`, `layout-app`) avec la commande: Run `yarn serve` . Verifier qu'il n'y a aucune erreur `lint` sinon   faire un `yarn lint` pour corriger toutes les erreurs de `lint ou eslint` puis relancer la commande: `yarn serve`
- Puis lancer en dernier l'application `root-config-app` avec la commande: `yarn serve`
 
