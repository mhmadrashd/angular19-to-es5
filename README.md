# Angular19Babel

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## To Convert EsNext to ES5

1- Install Dependencies. 'npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env core-js regenerator-runtime'

2- Set Webpack Config File.

3- Add browserlist File.

4- Add pollyfills.ts.

5- Add polyfills.ts to tsconfig.app.json.

6- Add polyfills.ts to angular.json.

7- Stop provideZoneChangeDetection({ eventCoalescing: true }) in app.config.ts.

8- Add provideExperimentalZonelessChangeDetection() in app.config.ts.

9- Add "webpack": "webpack" to package.json

10- Run "ng build --base-href /browser/ && npm run webpack" To generate es5 build.

## To Setup prettier, eslint and lint-staged and use husky.

1- ng add @angular-eslint/schematics

2- Add eslint.config.js file.

3- npm install --save-dev prettier lint-staged husky

4- Add .prettierrc file.

5- Add to package.json.

```json
"eslint": "eslint . --fix",
"prettier": "prettier . --write",
"prepare": "husky",
"pre-commit": "lint-staged"
```

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,js,json,css,scss,html,md}": [
      "prettier --write",
      "git add ."
    ],
    "*.{ts,js,html,md}": [
      "eslint . --fix",
      "git add ."
    ]
  }
```

6- Run npm run prepare command.

8- Create pre-commit file to .husky folder.

9- Add to pre-commit file.

```bash
#!/usr/bin/env sh
npm run pre-commit
```
