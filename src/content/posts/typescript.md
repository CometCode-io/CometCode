---
layout: post
title: 'What is Typescript?'
author: [Caelin]
tags: ['Web Development', 'Typescript']
date: '2020-05-26'
excerpt: Typescript is a popular technology you've probably seen all around the internet. But what exactly is it, and why is it so popular?
---

Typescript is a popular technology that you've probably heard thrown all around the internet. It can be used in almost every major web development framework, and is the [7th most popular language on Github](https://learnworthy.net/top-10-most-popular-language-of-2019-according-to-github/). But what exactly is Typescript, and why is it so popular?

# Typescript's Relation to JavaScript

Typescript is a typed subset of JavaScript that is compiled into plain JavaScript. What does that mean? Typescript built off of JavaScript and uses something called a "compiler" to convert Typescript into JavaScript that's [ECMA](https://en.wikipedia.org/wiki/ECMAScript) compliant. The Typescript compiler is built and maintained by Microsoft. *Javascript is still valid Typescript*, this means that you can have both JavaScript and Typescript in the same code base with no problems.  **Typescript builds on the successes of JavaScript while improving on its weaknesses**

The main goal of Typescript is to help catch mistakes by using a type system and make JavaScript development more efficient. This is done in three major ways:

## Support for Modern JavaScript Features
The JavaScript language is standardized through ECMAScript standards. However, not all browsers or JavaScript run times support all the features of ECMAScript. Typescript allows for use of most of the latest ECMAScript features, and translated them into older ECMAScript code so you can support more platforms and use the same code. This means you can safely use most of the new features of JavaScript, like modules, classes, spread operators, and others, while always remaining backwards compatible with older run times or browsers. 

## Advanced Type System
The *type* part of typescript comes from it's support for types. Type support isn't part of ECMAScript, and likely never will be, but since Typescript is compiled, it can support a rich set of typed features, such as interfaces, enums, hybrid types, generics, access modifiers, and much more. You can see all these features on the [typescript website](https://www.typescriptlang.org/). Typescript's type system is on-par with most other typed languages, such as C++ and others.

## Developer Tooling Support
Typescript's compiler can be used to support incremental compilation and IDE integration that can make it easier to navigate code bases, identify problems, and refactor code. 

# Optionally Static Typing and Type Inference
JavaScript is dynamically typed, which means it has no idea what type a variable is until instantiation at run-time, which also means it may be too late to catch bugs. Typescript adds type support to JavaScript. Bugs that are caused by not knowing the correct type of a variable can be eradicated with proper typing.

Typescript makes typing easier by the usage of type inference. This means that when you write `var x = "hello"`, Typescript will know that this means `var x: string = "hello"`. This eliminated verbosity and makes it easier and faster to write Typescript compared to other Typed languages.

Typescript is optionally typed by default, for example, the following code block is still valid in Typescript, and can be called with *any type parameter*. 
```
function divideByTwo(x) {
	return x / 2;
}
```

Typescript will automatically assign the parameter x with a type of `any`.  This means that the call sign for this function will automatically become `function divideByTwo(x: any): any`.  This can be disabled by running the compiler with `--noImplicitAny` which will ensure a higher degree of safety, but force you to do more typing.

Types do have a cost associated with them. There's of course the learning curve, but also the time it takes to properly implement types. However, in general, for code bases that are collaborative or open source, this makes it far easier for other developers to implement and edit your code. 

# Enhanced IDE Support
The development experience with Typescript is greatly enhanced with the implementation of Types. The IDE is informed in real-time by the Typescript compiler on the type information. This means that you can safely do refactoring like renames across your entire code base. With code completion, you can get inline help on any functions and instantly see types. Compilation errors are reported directly to the IDE while you're busy coding, saving you an extra step. All of this enables a faster and more efficient development princess compared to working with JavaScript, meaning you can spend more time developing and less time debugging. Most major IDEs have excellent type support for TypeScript, like VS Code, Webstorm, Atom, and Sublime.

# Strict null checks

Runtime errors that look like `cannot read property 'x' of undefined` or `undefined is not a function` are common bugs when developing JavaScript. Out of the box, Typescript reduces the chance of these errors occurring, since one cannot use a variable that's not part of the type declaration (with the exception of `any` typed variables). This eliminates wasted time spent trying to figure out what properties exist on a variable.

With strict null checks enabled, Typescript also won't allow `undefined` to be assigned to a variable unless explicitly declared as a type. For example, the statement `let x: number = undefined` won't work since undefined isn't the same type of number. However, you can still do this: `let x: number | undefined = undefined`, which lets the compiler and other developers know ahead of time that the variable can be null. 

Once a type is determined nullable, the compiler will determine whether your code can safely use the variable via control flow based type analysis. For example, refer to the code block below:
```
let x: number | undefined;
if (x !== undefined) x += 1; // this line will compile, because x is checked.
x += 1; // this line will fail compilation, because x might be undefined.
```

# Compilation

To use Typescript, your files must be compiled to JavaScript code. This process normally lasts a couple of seconds, and can be done automatically on file save. Typescript will also inline source map information in the generated files or create separate .map files. This information can be used by debugging utilities to relate the lines in UJS to the ones that generated them in Typescript. This makes it possible to use breakpoints and variable inspection during runtime on Typescript code. 

There are Typescript compilation plugins available for  [Webpack](https://github.com/TypeStrong/ts-loader),  [Gulp](https://www.npmjs.com/package/gulp-typescript),  [Grunt](https://www.npmjs.com/package/grunt-typescript)  and pretty much any other JavaScript build tool out there. The documentation has a section on  [integrating with build tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)  covering them all. [Eslint](https://github.com/typescript-eslint/typescript-eslint) with Typescript suport  is also available in case you would like even more build time checking. There are also a great number of seed projects out there that will get you started with TypeScript in combination with a bunch of other technologies like Angular, React, Ember, SystemJS, Webpack, Gulp, etc.

# Javascript Interoperability
Since Typescript is so closely related to JS, you can easily use both. However, to use JS libraries in Typescript, you need [TypeScript definitions](https://www.typescriptlang.org/docs/handbook/namespaces.html) to let Typescript know the types of all the various variables. 

Some npm modules come with type definitions preinstalled. For those that don't there's an entire codebase for types for various npm modules found in the Github repository [DefinitelyTyped] https://github.com/DefinitelyTyped/DefinitelyTyped#how-do-i-get-them).

# Converting from Javascript to Typescript
Any `.js` file can be renamed to a `.ts` file and ran through a compiler to get the same Javascript code as an output. Even when Typescript runs into an error, it'll still spit out a proper `.js` file. It can even accept `.js` files as an input. This allows you to slowly transition a code base over, and keep some code as normal JS and others as Typescript.

The initial compilation errors that occur when converting code are unavoidable due to Type Script's nature to check all code for validity, and its need for types. This can be solved by installing types for all your NPM packages. If they don't exist, you'll have to write your own `.d.ts` files to add types for the library. It'll automatically infer all the code Type Script doesn't know about as a type of `any` to prevent errors. You can read more about converting to Typescript in the [Typescript guide](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html).

# Conclusion

Typescript can only enhance your development experience. By taking the best of Javascript, and fixing some of its flaws, you'll have a net better experience programming, one with less bugs and more productivity. 
