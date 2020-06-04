---
layout: post
title: 'Demystifying the JavaScript Spread Operator (JavaScript ... Operator)'
author: [Caelin]
tags: ['JavaScript']
date: '2020-05-31'
excerpt: The spread operator (...) is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array into a function's arguments. 
---
The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array into a function's arguments. 

# What is the Spread Operator

The Javascript [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), or spread syntax, is the use of an ellipses of three dots, `...` to expand an iterable object into a list of arguments.

> **Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

The spread operator was introduced in JavaScript ES6 (ES2015). 

# What is JavaScript `...` used for?

Lets take a look at some examples. If you're trying to find the largest number in an array with `Math.max();`, you'll see it like this normally:

```javascript
Math.max(1, 3, 5) // 5
Math.max([1, 3, 5]) // NaN
```

Trying to pass the array into the function that expects separate arguments doesn't work. This is where the JavaScript `...` operator comes in handy:

```javascript
Math.max(...[1, 3, 5]) // 5
```

The spread syntax "spreads" the array into separate arguments.

# What else can JavaScript `...` do?

The JavaScript `...` operator can be used for a variety of routine tasks in JavaScript, such as:

- Copying an array
- Concatenating or combining arrays
- Using Math functions
- Using arrays as arguments
- Adding items to a list
- Adding or taking from  state in React
- Combining objects
- Converting NodeList to an array

In each case, the spread syntax expands some iterable object, usually an array (though strings work too!).

# Examples of Using the JavaScript `...` Operator

Here are some basic examples of using `...` in JavaScript:

## Copying an Array

```Javascript
const fruits = ['Apple', 'Banana', 'Pear', 'Watermelon'];
const moreFruits = [...fruits];
console.log(moreFruits); // Array(4) ['Apple', 'Banana', 'Pear', 'Watermelon']
fruits[0] = 'Peach';
console.log(...[...fruits, '...', ...moreFruits]) // 'Peach', 'Banana', 'Pear', 'Watermelon', '...', 'Apple', 'Banana', 'Pear', 'Watermelon'
```

## Concatenating (Combining) Arrays
As we saw in the last example, arrays can be easily added together with the spread operator.

```javascript
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combinedArray = [...firstArray, ...secondArray] // Array(6)
console.log(...combinedArray) // 1, 2, 3, 4, 5, 6
```

## Using Math Functions

As introduced before, the `Math.min` and `Math.max` functions can be made easier with the spread operator:

```javascript
const numbers = [37, -17, 7, 0]
console.log(Math.min(numbers)) // NaN
console.log(Math.min(...numbers)) // -17
console.log(Math.max(...numbers)) // 37
```

## Using an Array as Arguments

This can be super useful for passing in arrays into functions that require multiple parameters:

```javascript
const numbers = [1, 2, 3]
const addThreeNumbers = (p1, p2, p3) => console.log(p1 + p2 + p3);
addThreeNumbers(...numbers); // 6
```

## Adding items to a list
As noted in the last example, it's easy to combine arrays with the spread syntax

```javascript
let fewNumbers = [1, 2, 3];
fewNumbers = [...fewNumbers, 4]; // Array(4) [1, 2, 3, 4]
```

## Adding to State in React

This is probably the most common use of the spread operator. Lets look at a React component and see how this may be useful:

```javascript
import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function App() {
	// React Hooks declarations
	const [searches, setSearches] = useState([])
	const [query, setQuery] = useState("")
	const handleClick = () => {

	// Add the search term to the list onClick of Search button
	// (Actually searching would require an API call here)

	// Save search term state to React Hooks
	setSearches(searches => [...searches, query])

	}
// ...
```

## Combining Objects
 Spread syntax can be used to combine multiple objects into a new one:
```javascript
const objectOne = {"p1": 1}
const objectTwo = {"p2": 2}
const objectThree = {...objectOne, ...objectTwo, "p3": 3}
console.log(objectThree) // Object {p1: 1, p2: 2, p3: 3}
```

# The Spread Operator doesn't Copy Deeply-Nested Objects!

The spread operator only copies the first level with a new reference, deeper values are still together!

```javascript
const nestedArray = [[1], [2], [3]]
const nestedCopy = [...nestedArray] // This makes a shallow copy
console.log(nestedCopy); // [[1], [2], [3]]
```

# Conclusion

The spread operator is a convenient feature added in ES6 to help working with array and objects.

The spread syntax can save a lot of time while programming, and is an important tool to have in your JavaScript toolkit. 
