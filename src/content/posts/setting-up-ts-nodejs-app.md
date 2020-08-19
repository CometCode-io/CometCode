---
layout: post
title: 'Setting up a TypeScript NodeJS Application with Prettier and ESLint'
author: [Caelin]
tags: ['Software Design', 'Typescript', 'NodeJS']
date: '2020-06-21'
excerpt: Simple steps to setting up a NodeJS TS Application with Modern Tools
---

Boilerplate can be found [here](https://github.com/caelinsutch/typescript-eslint-prettier-boilerplate).

 TypeScript can seem complicated to setup, but you can do it in under 5 minutes with these simple setup steps. After this tutorial, you'll have a TypeScript ready app that can automatically restart once files are edited with ESLint and Prettier configured. 

With this setup, it'll be easier for you to write cleaner, most consistent code. 

**Prettier**
Prettier is an opinionated code formatted. It can work together with ESLint to catch errors and enforce a consistent code style throughout the project. As in the name, Prettier makes you code look *prettier*. Combined with ESLint, the two are powerful tools for writing good code.

# Project Setup
Create a new folder `typescript-nodejs` and run `npm init -y` to set the project up as node/npm project.


## Setup the main code file
Create a new folder `src` in your root directory, and a file called `index.ts` in the `src` folder. 

# TypeScript
  
Lets setup TypeScript:  
  
```bash  
npm i -D typescript # Typescript compiles to plain JS  
npm i -D ts-node # ts-node to run typescript code without compiling to JS  
npm i -D nodemon # Automatically restarts the application whenever file changes are detected  
```  
  
## Setting up TSConfig  
Now lets setup the Typescript config file. Create a new file `tsconfig.json` and add the following code:  
  
```json  
{  
  "compilerOptions": {  
  "target": "es6",  
    "module": "commonjs",  
    "rootDir": "src",  
    "outDir": "dist",  
    "sourceMap": true,  
    "resolveJsonModule": true,  
    "lib": ["es6", "dom"],  
    "esModuleInterop": true  
  },  
  "include": [  
    "src/**/*.ts"  
  ],  
  "exclude": [  
    "node_modules"  
  ]  
}  
```  
  
We won't go into depth about what all these options do, but you can read the [typescript documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to learn more.  
  
## Adding a Start Script  
Now, lets add some scripts to make it easier to run our code. Add the following to the `package.json` file.   
  
```json  
  
{  
  ...  
 "scripts": {  
    "start": "tsc && node dist/index.js",  
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
    "lint": "eslint .",  
	"lint:fix": "eslint . --fix"
  },  
 ...  
}  
```  
  
The start script compiles and runs our code, while the dev script will run the code and then rerun it every time you change it.

# Setting up ESLint and Prettier

## ESLint
First, let's install ESLint:
```bash
npm install eslint --save-dev  
npm install @typescript-eslint/parser --save-dev  
npm i @typescript-eslint/eslint-plugin --save-dev
```

Create a `.eslintrc.yaml` configuration file in your root folder to setup rules and parsing for the project:
```yaml
env:  
	node: true  
parser: '@typescript-eslint/parser'  
parserOptions:  
	ecmaVersion: 9
	project: ./tsconfig.json  
plugins:  
- '@typescript-eslint'
```

## Prettier
Next, let's setup prettier.
```bash
npm install prettier --save-dev  
npm install eslint-config-prettier --save-dev  
npm install eslint-plugin-prettier --save-dev
```

Create a `.prettierrc.yml` file in your project directory.
```yaml  
tabWidth: 2  
singleQuote: true
```

To integrate `Prettier` with `ESLint`, in the `.eslintrc.yaml`
```yaml
env:  
  node: true  
extends:  
  - plugin:@typescript-eslint/recommended  
  - prettier/@typescript-eslint  
  - plugin:prettier/recommended  
parser: '@typescript-eslint/parser'  
parserOptions:  
  ecmaVersion: 9  
  project: ./tsconfig.json  
plugins:  
 - '@typescript-eslint'
```

# Test It

Run `echo "console.log('TypeScript Eslint Prettier Starter Template!')" >> src/index.ts` then run `npm run lint`, and you should see an error popup since the above console statement has no semicolon. Run `npm run lint:fix` and the problem should fix itself. Then run `npm run dev` and you should see "TypeScript Eslint Prettier Starter Template" print to the console. 

# Wrap Up

That's it!

In most modern IDE's, you can setup ESLint to run on file save to automatically format your code. For example, you can change VSCode settings as shown below:

```json
"editor.formatOnSave": true,  
"[javascript]": {  
	"editor.formatOnSave": false  
},  
"prettier.disableLanguages": ["js"],  
"eslint.autoFixOnSave": true,  
"eslint.alwaysShowStatus": true,  
"files.autoSave": "onFocusChange",
```

Liked this article? I'd love to see you on Twitter, Github, or Linkedin!

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40caelin_sutch)](https://twitter.com/caelin_sutch)

[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/caelinsutch)

<a class="github-button" href="https://github.com/caelinsutch" data-size="large" aria-label="Follow @caelinsutch on GitHub">Follow @caelinsutch</a>
<script async defer src="https://buttons.github.io/buttons.js"></script>
