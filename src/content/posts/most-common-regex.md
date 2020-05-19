---
layout: snippet
title: 'Regex Cookbook'
author: [Caelin]
tags: ['Regex']
date: '2020-05-17'
excerpt: Regex can be confusing as all hell. Lets make it a little less confusing with some common regex recipes for you to implement. 
---

# What is Regex?
Regex is short for a "Regular Expression", which is a sequence of characters that define a search pattern for text. Usually, these are used to perform search or replace operations on strings, or for input validation. You can use Regex in practically every language to perform operations on strings.

Regex can be confusing as hell to write, but here are some of the most common Regex expressions for you to use in your software.

![Pattern](https://i.imgur.com/ZuYomIZ.png)

### 1. Match HTML Tags

Get HTML tags and their corresponding closing tag

```regexp
<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)
```

![Pattern](https://i.imgur.com/4KTSbp2.png)

### 2. Valid Email

```regexp
\b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b
```

![Pattern](https://i.imgur.com/9NRxaTW.png)
![Pattern](https://i.imgur.com/lyQJnaj.png)
### Username
Minimum 3 characters, max of 16, made of letters, numbers, or dashes
```regexp
/^[a-z0-9_-]{3,16}$/
```

![Pattern](https://i.imgur.com/OuTDtvt.png)
![Pattern](https://i.imgur.com/c4T0AIq.png)

### Strong Password
Minimum of 6 characters, at least one uppercase letter, one lowercase letter, a number, and a special character
```regexp
(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.*
```

![Pattern](https://i.imgur.com/LorUCTp.png)

### IPv4 Address
Matches any valid IPv4 address inside text

```regexp
\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b
```
