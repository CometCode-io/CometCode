---
layout: post
title: 'JSON in JavaScript'
author: [Caelin]
tags: ['JavaScript']
image: ../img/json-in-js.png
smallImage: true
date: '2020-06-1'
excerpt: JSON is one of the most universally used data transfer formats. Lets look at how JSON can be used in JavaScript.
---

JSON is a universally used format for storing and transporting data. JSON is often used when working with a server that transfers information to a webpage.

# What is JSON
JSON stands for JavaScript Object Notation. It's a lightweight data interchange format that's language agnostic and self-describing.

# JSON Example
The data represented below is an array of three employees. 
```json
{  
	"employees":[  
		{"firstName":"John", "lastName":"Doe"},  
		{"firstName":"Anna", "lastName":"Smith"},  
		{"firstName":"Peter", "lastName":"Jones"}  
	]  
}
```

# JSON is Easily Transformed into JavaScript Objects
The JSON format is pretty much identical to the JavaScript object notation, so it's extremely easy for JavaScript programs to convert JSON data into a native JavaScript objects.

# JSON Syntax Rules
1. Data is in name/value pairs
2. Data is separated by commas
3. Curly braces hold objects
4. Square brackets hold arrays

# JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript objects. This means easy name/value pair consists of a field name, in quotes, followed by a colon, and then a value.
```json
"firstName": "John"
```

**Unlike JavaScript objects, JSON requires double quotes for field names**

# JSON Objects
Objects are written in curly braces, which contain multiple name/value pairs.
```json
{
	"industry": "Computer Engineering"
	"age": 32
}
```

# JSON Arrays
JSON array's are written in square brackets. They consists of multiple objects. 

```json
{  
	"employees":[  
		{"firstName":"John", "lastName":"Doe"},  
		{"firstName":"Anna", "lastName":"Smith"},  
		{"firstName":"Peter", "lastName":"Jones"}  
	]  
}
```

The key "employees" is an array of three objects. Each object is a record of a person.

# Converting JSON to JavaScript
A common use of JSON is to read data from a web server, then interpret and display that data on a web page. For simplicity, we're going to use a string as a JSON input. 

```javascript
var text = '{ "employees" : [' +  
'{ "firstName":"John" , "lastName":"Doe" },' +  
'{ "firstName":"Anna" , "lastName":"Smith" },' +  
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```

Then, we'll use the built-in JavaScript function `JSON.parse()` to convert the string into a JavaScript object:
```javascript
var obj = JSON.parse(text);
```

Finally, we can actually use this object in our webpage as so:
```html
<p id="demo"></p>  
  
<script>  
document.getElementById("demo").innerHTML  =  
obj.employees[1].firstName  +  " "  + obj.employees[1].lastName;  
</script>
```

# Converting JSON to a String
If we want to convert JSON back into a string, to send data to a server for example, we can do that with the built in `JSON.stringify(obj)` function as so:

```javascript
var stringifiedJSON = JSON.stringify(obj); // This is now a simple string :)
```
