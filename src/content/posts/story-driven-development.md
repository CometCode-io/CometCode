---
layout: post
title: 'Story Driven Development'
author: [Caelin]
tags: ['Software Design', 'Theory']
date: '2020-06-8'
excerpt: Looking at the popular develompent process "Story Driven Development"
---

At Bytes Robotics we use the Story Driven development process to drive feature development and requirement gathering. Stories read different than traditional business documents. Rather than taking a removed third party perspective, you’re transported into the world of the user, feeling what they feel, understanding what they believe, and more importantly, realize and recognize future flaws based on what they know.

These of course can’t be drawn out novels documenting the tales of the software, but it’s important to cast formulaic and dry business requirements into a semblance of a story. Stories are written in the present tense, imagine your software once it’s complete, what will the user be seeing and doing?

Lets take a look at an example story for an ecommerce website:

> **As a** user
> 
> **I can** click a button
> 
> **So that** I can complete a purchase

This isn’t quite the story you’re looking for. It’s dry, requirements-esque, and still raises some fundamental questions:

- Does the user want to make a purchase?
- Does a user want to click a button?
- How can the user most effectively conduct a transaction

> As a user I can purchase an item.

This is too general. How is the user purchasing an item? With one click? Is there a summary screen?

> As a user I can review the list of items I want to purchase, then confirm those choices before purchasing.

The above story is a bit better, it presents the idea that the user wants to confirm his/her choices, and says what the user wants without explicitly going to how and what. However, this is still too broad. What does the user want to review in terms of information? What kind of options do we provide? All these questions should be answered.

> As a user I am presented with photos of the items, prices, quantities, and options before agreeing to enter the purchasing process. I can see my total spending, and be able to remove items, modify quantities, and see how that affects my total cost.

Here we start getting into the process visually and provide the reason why we want all these features, to see the total cost.

> As a user I can to see the total amount I will be spending with a breakdown of what composes that cost. I want to be able to modify items in my list to achieve the optimum cost for me.

Hmm, we’re still missing something, who the “user” is. Adding personas to our story adds a way to differentiate between a variety of users. A 60 year old grandmother from Alabama will want a vastly different experience than a 20 year old tech entrepreneur in silicon valley. There is no single, magical user, but instead real people with their own unique experiences. By modeling real people, we can understand that features in software can be and are interpreted differently by different users.

> Nicole, a young women in silicon valley, can quickly purchase the item she is looking at now.

> John, a grandpa in the Midwest, can carefully analyze the total cost of his purchase and adjust it to fit his budget by modifying quantities and types of items/

> William wants to review items like John, but add additional confirmation of cost after selecting a payment method to easily sync up the transaction with his bank account.

Story telling is important for developing applications that are designed around users. At Bytes Robotics, we do this in a round table discussion, where developers, product owners, and executives gather around to hear the different aspects of the story that make our product unique and effective.

The other part is feedback. During our discussion, anyone can comment or suggest changes or modifications to a story. We can also take the stories that we’ve developed and back them up with real world data from customers.

By focusing on story driven narratives, we can bring our product into peoples real lives, and have the opportunity to build rich, engaging, and useful applications that add long term value to the customer.
