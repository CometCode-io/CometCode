---
layout: post
title: 'Why Deno is Awesome'
author: [Caelin]
tags: ['Web Development', 'NodeJS', 'JavaScript']
date: '2020-07-29'
excerpt: Deno is the up and coming contender against NodeJS for the JavaScript throne, lets talk about the differences and advantages of each platform. 
---
You’ve probably heard of Deno, the supposed legendary new Javascript runtime that allegedly solves many of the inherent problems with node. Created by Ryan Dahl, the maker of NodeJS, Deno includes various features that make developers lives simpler.

Like most JS developers, the first thing that I thought when hearing about another JS framework was fear and a preparation for a painful process of learning a new technology, but Deno has been surprisingly awesome for developing modern and fast JavaScript code.

Lets take a look at why Deno is so attractive to developers in 2020.

## Reliance on Modern JS Import Syntax
Back when node was created in 2009, the module import syntax relied on the `require` method. Modern Javascript uses the the `import` syntax. For example, lets take a look at this code snippet:

```js
// Traditional JS Method
const module = require('module');

// ES6 Module Method
import { module } from 'module';
```

If you work with modern frameworks like React or Angular, you’re probably using the ES6 module syntax. Deno uses the ES6 module syntax by default. 

**Why ES6 Module Import Syntax is Better**
1. With `import`, you can selectively load in modules from a package, saving memory
2. With `require`, loading is synchronous (meaning it happens in the process foreground), with `import` loading is asynchronous, which drastically improves performance when importing modules.

## Decentralized Packages
With NodeJS, you’re probably used to using NPM to keep track of and load modules using a `package.json`. Whenever you want to use an external package, you have to first install the package:

```bash
npm i package
```

 Then import it:

```js
const moment = require("moment")
```

Whenever someone wants to run your package locally, they would have to install all the packages separately. If you’re running multiple projects on your machine that rely on the same packages, there’s no easy way to share packages between projects, so duplicate packages will be installed on your machine, wasting space.

In Deno, packages are imported from a URL:
```js
import { moment } from 'https://deno.land/x/moment/moment.ts.'
```

Deno automatically caches packages on your machine after installation, so **packages are only installed once**.

## Native TypeScript
If you don’t know what TypeScript is, you probably should do some reading on it [here](https://cometcode.io/posts/typescript/). Normally, in Node getting TypeScript to work is a multistep process. You’d have to install typescript, update the `package.json`, `tsconfig.json`, and make sure your modules have @types supported.

With Deno, **TypeScript support is natively baked in!**

## Top Level Await
In Node, the `await` keyword can only be used in async functions:
```js
const getData = async () => {
	const data = await fetch('https://google.com');
	const result = await data.json();
} 
```

With Deno, you can use await anywhere, including top level code, so you **don’t have to declare an async function before using await!** 

```js
// No Async Needed!
const data = await fetch('https://google.com');
const result = await data.json();
```

This is a drastic improvement that makes code simpler and easier to write!

## Access to the Browser API
Using the Browser API, which includes access to methods like fetch, normally isn’t accessible by default, you have to install an NPM package. 

Deno automatically has access  to the Browser API, so you can call fetch without importing any other packages. 

This makes code significantly simpler, and eliminates having to import additional modules. 

# Deno’s Future
Deno has many other advantages besides these, far more than can be covered in this article. 

Combined, all these features make it easier to write clean, modern, and fast JavaScript code. As a React and Angular developer, the modern features and native TypeScript support of Deno are naturally appealing.

Will Deno ever replace NodeJS? Probably not anytime soon. NodeJS is quite entrenched in the market, but more and more JavaScript developers are switching to Deno for their next project. 

# Keep in Touch
There's a lot of content out there, I appreciate you reading mine. I'm a young entrepreneur and I write about software development and my experience running companies. You can signup for my newsletter [here](https://newsletter.cometcode.io)

Feel free to reach out and connect with me on [Linkedin](https://www.linkedin.com/in/caelinsutch) or [Twitter](https://twitter.com/caelin_sutch).
