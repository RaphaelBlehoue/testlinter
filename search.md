###note doc###

- importante: init with git and nvmrc file include node version to use in project (test is require before start to work with project).

- yarn install the package them in parallel
- npm install the package them in sequentiel
- **_Un polyfill_** est un code qui vérifie si une fonctionnalité est prise en charge dans l'environnement et, dans le cas contraire, fournit des méthodes qui imitent l'implémentation native.
- babel/cli et core compile le fichier de maniere identique en enlevant les espaces blanc, il faut ajouter les configuration des plugins & preset dans un fichier .babelrc
- cli multiplateform : yarn add rimraf --dev (detail cli "rm -rf dist/ && babel src -d dist" for one platforme(Mac))
