---
layout: post
title: 'What are Websockets and why are they useful?'
author: [Caelin]
tags: ['Websockets']
date: '2020-05-09'
excerpt: WebSockets represent a standard for bi-directional realtime communication between servers and clients. Here's why that matters
---


Websockets are an evolution of traditional client/server technology. They create a long-held single TCP socket connection between the client and server, allowing for bi-directional fully duplex messages to be instantly distributed with little overhead, leading to a very low latency connection.  

Both the [Websocket API](http://dev.w3.org/html5/websockets/) as well as native WebSocket support in browsers such as Google Chrome or Firefox means that this technology is widely supported. There are also Websocket library implementations in a variety of other languages, such as [Ruby](http://www.r3ef.com/Articles/2010/10/13/websockets-client-with-eventmachine.html) and [Java](https://github.com/adamac/Java-WebSocket-client/blob/master/src/com/sixfire/websocket/WebSocket.java).

# A brief history of the web
Originally, the internet wasn't designed to be dynamic. It was conceived as a collection of HTML pages linking to one another to form a web of information. Overtime, the number of static resources increased and richer items, such as images or video, became essential to the web. Server technologies advanced, allowing for dynamic server pages - pages whose content was generated based on a query.

The requirement to have more dynamic pages led to Dynamic Hyper Text Markup Language (DHTML) thanks to JavaScript. Various methods of communication to avoid page reloads were implemented to ensure data could be updated reliability and behind the scenes. Thanks to Microsoft, we ended up with Asynchronous JavaScript and XML (AJAX). In turn, AJAX made XHR Long-Polling and XHR Streaming possible, but none of these were solutions to a standardized cross browser solution to real time bi-directional communication. 

**Then entered Websockets**

# Why Websockets are a game-changer
Websockets represented a new standard for bi-directional real-time communication between servers and clients. The standards first approach means developers can create functionality that is truly cross platform. Since web sockets represent a single TCP socket connection, connection limitations are no longer a problem. Cross domain communication was built in with the connection handshake. 

# WebSockets v AJAX
WebSockets don;'t make AJAX obsolete by a long shot, but they do supersede [Comet](http://en.wikipedia.org/wiki/Comet_(programming)) (HTTP Long-polling/HTTP Streaming) as the solution of choice for true real-time functionality. AJAX is still best when making short web service calls, and with CORS support more widespread, it's becoming even more useful. However, if you need real-time bidirectional data streaming, the low bandwidth and latency makes WebSockets the obvious better choice.  
