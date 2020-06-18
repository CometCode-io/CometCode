---
layout: post
title: 'You Can Do a Lot More with the JavaScript Console than console.log()'
author: [Caelin]
image: ../img/javascript-console.png
smallImage: true
tags: ['JavaScript']
date: '2020-05-31'
excerpt: Examining some of the other uses of the console object to enhance your JavaScript application debugging experience.
---

If you do any sort of web development, you probably use a lot of `console.log(x)` when debugging your applications. It's a stragghtforward way to figure out what's going on in your code. But the console object has quite a few other methods that can help you debug your applications better. 

**The Basics**
You can of course print strings:
`console.log("Where am I?")`

and objects as well:

```javascript
const foo = { id: 1, name: 'Joe', age: 12 }
console.log(foo);
```

The problem is, this will give the following output:
![Result of console.log(foo)](https://i.imgur.com/VHkwoU1.png)


You don't actually see the variable name of foo. This can get annoying when debugging with a lot of Outputs. Thankfully, we can fix this by using console.log as so:

```javascript
console.log({foo})
```

which gives the following output:

![Output of console.log({foo})](https://i.imgur.com/Z4h4EVw.png)


# console.warn() and console.error()

Many people also forget about our friends `console.warn()` and `console.error()`, which can be used to make your console more readable. `console.info()` is also available, and some browsers will show a special icon for it.

![Other console methods](https://i.imgur.com/TqpSTOD.png)

# console.group()

Outputting a lot of logs or errors? You can actually nest them with console.group to make your logs easier to read. This is great for making sure that the scope of each log statement is clearly deliminated.

For example, look at these logs for a shopping cart:
```javascript
console.group('Shopping Cart');

console.log('user: John Doe');

// First Shopping Item

console.group('Shopping item');

console.log('Name: JS Book 1');

console.log('Author: Unknown author');

console.log('ISBN: 048665088X');

console.groupEnd();

// Second Shopping Item

console.group('Shopping item');

console.log('Name: JS Book 2');

console.log('Author: Unknown author');

console.log('ISBN: 048665087X');

console.groupEnd();

console.groupEnd();
```

This will give the following output:

![Output](https://i.imgur.com/wExkc8n.png)

# console.table()

This will actually put objects into a nice table to make it more readable. If you have objects with common properties or an array of objects, you can use `console.table()` to make it more readable. For example, lets define an a few objects:

```javascript
const a = {id: 1, a: "a", b: "b"}
const b = {id: 1, a: "a", b: "b"}
const c = [a, b]

console.table({a, b})
console.table(c)
```

This is the output:

![Output of console.table](https://i.imgur.com/R5tHzC4.png)



# console.trace()

This will show you the call path taken to reach the point at which you call `[console.trace](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)()`

# console.time()

Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call `[console.timeEnd](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)()` with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

```javascript
console.time();

for (let i = 0; i < 100000; i++) {

// some code

}

console.timeEnd();
```

![console.time() example](https://i.imgur.com/litqiTR.png)

# console.clear()

Pretty intuitive, clears the console of all the messages that have built up. 

# console.dir()

This prints out all the properties of a specific JavaScript object in the console, so we can easily see all the available properties (methods, variables, etc.)

![Example of console.dir()](https://i.imgur.com/6eIQabX.png)

# Conclusion

All of these various console methods will hopefully allow you to be more effective at using the console object to debug your JavaScript applications. 

# Like to learn?
Stop by and say hi at my [LinkedIn](https://www.linkedin.com/in/caelin-sutch-602b6b135/)!
