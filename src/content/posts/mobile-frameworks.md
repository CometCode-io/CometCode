---
layout: post
title: 'React Native vs Flutter vs Ionic vs NativeScript'
author: [Caelin]
tags: ['Flutter', 'React Native', 'Ionic', 'Nativescript']
date: '2020-05-23'
image: ../img/mobile-dev-frameworks.png
excerpt: The four most popular cross platform app development platforms compared.
---

![](https://cdn-images-1.medium.com/max/2400/0*scEiGK78f8JMz_q5.jpg)

I come from a web app development background, think Angular and React, but recently, I’ve been tasked with creating a mobile app for a startup. Initially, I looked around at a few different options, you can code a native app in Swift (iOS) or Objective C, Kotlin, or Java (Android), but that requires development and upkeep of **two separate apps**. However, there’s also quite a lot of new mobile app frameworks that promise low-overhead cross-platform app development.

Lets look at a few of these options:

![Flutter](https://cdn-images-1.medium.com/max/2560/0*XxGBqG0sWgVcWQrR.jpg)

## Flutter

Flutter is both a SDK (software development kit) and a framework for [Dart](https://www.dartlang.org/) — a programming language developed by Google. Flutter itself is also developed by a Google team and now open sourced for crowd development.

Flutter is written in a language called Dart, which is compiled to native code that runs on the target device. Flutter is build around “widgets”, or interfaces. Flutter shipos with a bunch of pre-configured widgets for Material and Cupertino themes and you can of course build your own widgets.

The SDK portion of the technology is well developed, such as IDE extensions and hot reloading (live updating on an emulator or real device).

![](https://cdn-images-1.medium.com/max/2000/0*9_2meJ6Eghv6lpSm.png)

## React Native

React Native is a technology/ framework developed by Facebook.

It uses JavaScript and the [React](http://reactjs.org/) library to allow you to build beautiful user interfaces composed of React components.

If you come from a React background, unlike apps built for browser, you can only use a set of pre-built components from React that will be compiled to native code.

You’re still able to use packages like Redux and knowing JavaScript and React of course allows you to quickly get started with React Native, too.

![](https://cdn-images-1.medium.com/max/2700/0*iJb-k2z9v5X_aimH)

## NativeScript

NativeScript also uses JavaScript to build native mobile apps. It comes in different flavors — [pure JavaScript/ TypeScript](https://docs.nativescript.org/start/introduction), [with Angular](https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular) and [with Vue.js](https://www.nativescript.org/vue).

It gives you the option of working with different frameworks as you can see — the different options are developed independently from each other though. So you might have an easier time or more built-in components with option A than you have with B. This gives the developer flexibility to use what they’re most experienced with.

Like Flutter and React Native, NativeScript also ships you a bunch of pre-built components which you use to compose user interfaces. It does not work with HTML but with its own components (like React Native).

![](https://cdn-images-1.medium.com/max/2400/0*9TyhfX0cvXyvaISa.png)

## Ionic

With Ionic, you still create a real native app but you do this by creating a web app (with HTML, JS and CSS) which will be wrapped by a real native app that hosts a webview (basically a hidden browser).

Since you build a web page in the end, Ionic is pretty easy to get started with for web developers.

Starting with Ionic 4, Ionic is basically a huge suite of components you can use (buttons, cards etc) with **any frontend framework** (or none at all).

Ionic also provides a lot of tooling that makes the development of mobile apps easier (e.g. a development server for running your app on an emulator/ real device with live-updating) and it also bundles the app into shippable packages. Additionally, the Ionic team is involved in the [Capacitor](https://capacitor.ionicframework.com/) project which offers a lot of JavaScript packages you can add to any (!) web project to tap into native device features like the camera.

That being said, since Ionic is hosted in a webview container, there is a performance impact.

## Which framework is best?

First of all, you have to decide whether you want to stick to the native languages (Swift, ObjectiveC, Java) and accept the disadvantage of learning two things and writing two apps. This is a lot of work and mastering two languages and platforms is way harder than mastering one, but there are some advantages in low level API access.

If you don’t want to use the native languages, you have to decide whether you want a wrapped-app solution as Ionic offers it. Whilst having the performance disadvantage (which might not matter that much as discussed above), you will get a super-fast development experience. You can use your web development know-how and build two apps with one tech stack in little time.

But if performance is super-important to you — or you need to access a lot of (advanced) native device features — you might want to take a look at React Native, Flutter r NativeScript.

## Conclusion

I ended up choosing Flutter to develop with because of its speed, developer experience (it’s a joy to write widgets, everything is easily customizable), and active community. Either way, these are all excellent options for development!
