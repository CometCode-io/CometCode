---
layout: post
title: 'What is Firebase?'
author: [Caelin]
tags: ['Firebase']
image: ../img/what-is-firebase.png
smallImage: true
date: '2020-05-17'
excerpt: Firebase, the BaaS platform, is as wide spreading as it is useful. But what are the different parts of the Firebase Platform, and how can you use them? 
---
Firebase is a Backend-as-a-Service - BaaS - that's currently owned and developed by Google. Firebase frees developers to focus on crafting fantastic user experiences, free from the burdens and horrors of writing, deploying, and maintaining server clusters.

![Server Rack](https://thumbs.gfycat.com/DisastrousDenseEmu.webp)
*No more scary servers*

Yes, there are maybe some specific functions that you'll have to use Google Cloud or other Cloud services for, but for the most part, Firebase is written generically that it can be used everywhere for everything. 

So what is Firebase?

![Firebase Breakdown](https://miro.medium.com/max/1400/0*HORJhBhTELtW9qQw)

We're going to be covering that first third ('Build Better Apps') in depth, and leave the other two for you to mull over on your own time. 

# Realtime Database
Realtime data is the way of the future. Gone are the days or REST API's that rely on HTTP to get and sync data, leading to slow async behavior as you wait for data, and constant calls to the server to get up to date data. 

When you use the Firebase database, you're not connecting through normal HTTP, but instead a WebSocket. Web sockets create a two way connection that is real time. That means no waiting for a HTTP call to finish, you get data updates as fast as the network can carry them. When updating data in an application, it's synced to the database and other users practically instantly. 

Even better, all of this is already setup with the easy ability to add authentication rules to protect your data how you see fit. 

# File Storage
Firebase Storage provides a simple way to save files, from images to archives, to Google Cloud Storage directly from the client. Firebase Storage comes with its own set of security rules to ensure you control what's being uploaded to your server.

# Authentication
Firebase Auth has a variety of authentication providers, from traditional email/password to Github, Google, Twitter, and even phone verification. You are free from having to write convulted authentication systems that may or may not be secure. 
Firebase Authentication also works seamlessly with the rest of Firebase, such as the Realtime Database and Storage to ensure that you can easily control who's accessing your data.

# Hosting
Firebase has an easy-to-use hosting service for your static files, served from a global CDN with HTTP2. You can easily deploy your app from the command line across the world. 

# Serverless Functions
Firebase Functions provide an easy way to write and deploy serverless functions. What are serverless functions, well in a nutshell they're functions that only run when called, that means no Express HTTP server running 24/7 in the cloud, saving cost. Chron jobs, HTTP calls, and triggers from other Firebase actions are all built in, making it super easy to integrate with your system. 

# ML Kit
Firebase also includes an SDK for common ML tasks, such as image recognition. A bunch of ML applications are provided out of the box, but you can also upload a custom Tensorflow model. 

# A Bunch of Others
I'm not going to cover the whole suite, but there's also:

**Analytics** — understand your users, and how they use your app  
**Predictions** — apply machine learning to analytics to predict user behavior  
**Cloud Messaging** — send messages and notifications to users  
**Remote Config** — customize your app without deploying a new version; monitor the changes  
**A/B Testing** — run marketing and usability experiments to see what works best  
**Dynamic Links** — enable native app conversions, user sharing, and marketing campaigns  
**App Indexing** — re-engage users with Google Search integration  
**In-App Messaging** — engage your active users with targeted messages
**Test Lab** — scalable and automated app testing on cloud-hosted devices  
**Crashlytics** — get clear, actionable insight into your app’s crashes  
**Performance Monitoring** — gain insight into your app’s performance issues

AHHH That's a lot of features, I've yet to use all the features in one app, but I'm looking forward to that day.

# Who's Firebase For?
Anyone who needs a backend! It's designed to integrate really well with web and mobile applications with SDK's for tons of different languages. And the best part, it's super duper cheap. The free tier is extremely generous, so you can play around to your hearts content with the various features that Firebase offers. 

# Quick Summary:

## What Firebase Is
- Firebase is Google's mobile application development platform
- You're going to save tons of time and money using Firebase products instead of building them yourself
- You can use all of it, parts of it, or a single piece of it
- All those parts work together like a well oiled engine
