---
layout: post
title: 'Let vs. Var in JavaScript'
author: [Caelin]
tags: ['JavaScript']
image: ../img/let-v-var.png
smallImage: true
date: '2020-06-1'
excerpt: Let and Var can seem interchangeable in JavaScript, but there are some differences in the two that can impact how you use them.
---

In JavaScript, `let` and `var` are often used interchangebly. However, there are some differences in how these variables are scoped.

1. `let` variables are only visible in their nearest enclosing block ({ ... }), not before or after that block.
2. `let` variables are only usable after declaration in code.
3. `let` variables may not be redeclared by a subsequent var or let. They can only be declared once.
4. Global `let` variables aren't added to the global window object.

The restrictions imposed by let reduce the visibility of the variables and  can help in debugging by reducing scope.This not only makes it faster and easier to keep track of variables, but also reduced the amount of memory variables take up.

`let` variables generally tend to cause fewer problems in large programs or when using a variety of frameworks. 

`var` may still be useful if you are sure you want the single-binding effect when using a closure in a loop (#5) or for declaring externally-visible global variables in your code (#4).

# Examples
**1. `let` is only block scoped. Enclose it in brackets, and you can't access it outside of that block.**
```javascript
{
    let a = 1;
}
console.log(`a is ${a}`);  // ReferenceError during parsing: "x is not defined".
```
If we use `var` instead, it will work.

**2. `let` can only be used after declaration**
This block of code will throw a `ReferenceError` before the code can be run because x is used before it is declared:
```javascript
{
    x = x + 1;  // ReferenceError during parsing: "x is not defined" because x is defined only below.
    let x;
}
```
`var` can be used before formal declaration, so the code above would work.

**3. Variables declared with `let` can only be declared once**
```javascript
let x = 1;
let x = 2;  // SyntaxError: Identifier 'x' has already been declared
```

**4. Global variables with `let` aren't attached to the window**
```javascript
var button = "Bad naming causes error";
let link = "This name sucks too, but at least I'm only local";
console.log(link);  // OK
console.log(window.link);  // undefined, good, because it keeps declaration local
console.log(window.button);  // OK
```

**5. Easy use with loop closure**

It's easier to use let when working with variables that are used in loops that have repeating behavior.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(`i is ${i}`), 125 /*ms*/);
}
```
Specifically, this outputs:
```
i is 0
i is 1
i is 2
i is 3
i is 4
```
If we delay the closure of the for loop by setting a timeout, we'll see that the behavior above doesn't change.
```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(_ => console.log(`i is ${i}`), 125/*ms*/);
}
```
However, if we use var instead of let, we'll start having some problems:
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(_ => console.log(`i is ${i}`), 125/*ms*/);
}
```
... the loop unexpectedly outputs "i is 5" five times:
```
i is 5
i is 5
i is 5
i is 5
i is 5
```

The problem here is that `var` allows the same variable to be overwritten, meaning that in the 125ms of time it takes for the setTimeOut to finish, the loop has already completed and set x to 5. 

# Conclusion

In general, it's probably a better idea to use `let` to help you reduce bugs and errors in your code. 
