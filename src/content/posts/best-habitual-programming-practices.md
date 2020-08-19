---
layout: post
title: 'Do These Four Things Habitually to Become a Better Programmer'
author: [Caelin]
tags: ['Productivity']
date: '2020-08-15'
excerpt: Let’s talk about four things that you should habitually be doing to become a better developer.
---
Becoming a better programmer is far more than learning the next framework, or memorizing more algorithms. It’s all the small behaviors that make up your daily day that may not obviously make your work better, but in the long term build healthy habits that not only help you, but the rest of the developers on your team.

Let’s talk about four things that you should habitually be doing to become a better developer.

![Photo by [Chris Ried](https://unsplash.com/@cdr6934?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12032/0*YJtSSqpzBQ5LE-Yq)

## Clean up Your Code

Although it may be hard to articulate in words, every developer knows what stinky code smells like. It’s the type of code that you look at, and it makes you internally cringe.

The small stuff like variable names, function names, complicated syntax to do a simple functions, can all build up a stink and make code impossible to work with.

Thankfully, this is an easy problem to fix. When I encounter bad code, I change one small thing at a time, testing (which we’ll go into) after each change, and continuing that process until the code is all nice and clean.

This is a practice that never really stops. As a software developer, you’ll constantly be learning new things. Practices that were considered “Best Practice” 5 years ago aren’t today. Code does rot over time, so going back through stuff and fixing code as you come across with will help maintain a code base for a long time.

![Photo by [Luca Bravo](https://unsplash.com/@lucabravo?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12000/0*UMXXq1bS4OyzQzUk)

## Document, Document, Document

If working with a team of developers it’s always a good practice to use JSDoc style documentation on all your code.

For example, lets look at this function header in TypeScript:

    /**
    * Creates a new dog for the kennel.
    * @param eyeColor {EyeColor} - The color of the dogs eyes
    * @param dogLength {number} - The length of the dog in meters. Accepts a maximum value of 3
    * @param dogBreed {DogBreed} - The breed of the dog being created. 
    * @returns Dog - the newly created dog :)
    **/
    function createNewDog(eyeColor: EyeColor, dogLength: number, dogBreed: DogBreed): Dog;

You’ll notice that the function name and all parameter names make sense. You probably wouldn’t event need the JSDocs because they’re named appropriately. The JSDocs are clear and use the proper annotations. This code is something that any developer can look at and almost instantly understand. Even better, those JSDocs are helpful for autocomplete features in most IDE’s (if this was JS or another language), making it easier for other developers to use your code.

![Photo by [Rich Tervet](https://unsplash.com/@richtervet?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10368/0*jou62KRYvfEge_n9)

## All Hail Simple Code

Yes, you may be able to incorporate all these fancy functions to accomplish a task with less lines of code, but it will be completely unreadable for other devs. In JavaScript, ES6 array functions, such as .map, .filter, and others can make it really easy to create an awesome one liner that fulfills your needs. However, unless it’s easy for any other dev to look at and understand, **don’t write it.**

Over-engineering code, or adding fancy extra features for no reason, adds complexity for no good reason. Over-engineering code can lead to code that’s so generic, it’s disconnected from the task that it’s actually made for. This is all that extra abstracted functionality that’s developed just in case someone wants to create a dog with four eyes, or 8 legs, or a 10 meter long dog. All those cases are generally ridiculous (unless your code is in some sort of horror game) and shouldn’t be implemented.

![Photo by [Marten Bjork](https://unsplash.com/@martenbjork?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10740/0*KtmXiTmNbtPJoXRf)

## Properly Architect Your Code

This is the number one problem I see with newbie devs. They don’t take the proper time to plan out code, and instead dive right into writing code, which can lead to more mistakes, over engineering, and unfocused development.

Of course, as a dev I understand the urge to just start developing, because that’s why we program, but planning is still important.

Taking the time to make a nice flowchart, requirements list, and other planning documentation doesn’t just help you figure out what you’re writing, but also helps future devs understand the thought process behind the code.

Ask yourself:

* How is this code structured?

* Why is this code developed?

* How will I know when this code is done?

If you can provide well thought out answers to all these questions, you know that you’ve planned properly for your code.

## Conclusion

Practicing doing the four above things every day will lead to drastically better code over time. Equipped with these tools, your future self will love you and your teammates will love you.

## Keep in Touch

There’s a lot of content out there, I appreciate you reading mine. I’m a young entrepreneur and I write about software development and my experience running companies. You can signup for my newsletter [here](https://newsletter.cometcode.io)

Feel free to reach out and connect with me (I love meeting new people!) on [Linkedin](https://www.linkedin.com/in/caelinsutch) or [Twitter](https://twitter.com/caelin_sutch).
