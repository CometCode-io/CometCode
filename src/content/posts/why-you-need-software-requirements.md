---
layout: post
title: 'Why you need Software Requirements for your Application'
author: [Caelin]
tags: ['Software Design', 'Theory']
image: ../img/why-you-need-software-requirements.png
smallImage: true
date: '2020-05-17'
excerpt: In this article, we'll be going over the importance of requirements in software development.
---

In this article, we'll be going over the importance of requirements in software development and why you shouldn't be neglecting a requirements list.

# What are requirements in app development?

Requirements simply specify what features a product should include, and how those features should work. How you approach developing requirements in what's important.

Gathering and analyzing a list of requirements is one of the initial stages in Agile and Waterfall development methodologies. When working with clients, requirements are often quite detailed to outline what the exact product is that's being produced. **What you're producing is just as important as what you're not producing.**

# How to define software requirements
There are several types of requirements in software development.

## Business requirements

This is looking at the app from the user or client side. Why does the client need the app? If you're striving to build quality products, you should care about the whys of the software you're building, not just the hows. For example, in an application like Uber, some business requirements might be allowing users to rideshare from one location to another. Business requirements aren't concerned with the technical details of how a feature is implemented, just what a feature is. 

**Business requirements provide a vision for the final goal**, which allows developers to set priorities to what they're building. Without a clear set of business requirements, poor decisions can be made that can slow development, disrupt deadlines, and result in additional development stages. 

## Software Requirements
There are a two types of software requirements: functional and nonfunctional:

**Functional requirements** are the "whats" - What does the system do? They describe the functionality of the software that's being built.

**Nonfunctional requirements** are the how requirements - How will this system achieve the functional requirements? These requirements describe how the system will behave under a variety of conditions, what limitations on the software there are, etc.

For example, take a messenger app like Facebook Messenger.

The main functional requirements would be:
1. The app must be able to send messages
2. The app must support file and media transfer
3. etc.

The functional requirements are pretty easy to understand, they outline functionality. In this example, the nonfunctional requirements might be:
1. The service must offer full functionality in all major browsers.
2. Mobile layouts must be supported

 As you can see, the functional requirements ar ebasically a list of functionality that must be included in the ssytem. Nonfunctional requirements are specific hows to define the development and testing conditions.

Without precise parameters specified, it’s impossible to understand whether a feature is designed exactly as it should be. If you're building a messenger app without requirements, there are practically unlimited features that can be added, you must detail what you are developing and what you're not. 

Requirements must be thoroughly analyzed and documented. Why? Because so many things can go awry if they aren't.

# If you don't have requirements, your software will suck

Imagine looking at your software from a Quality Assurance standpoint. **How can you determine correctly implemented software if you don't have clear guidelines on what the software should do?** It'd be total madness.

Having no official specifications means:
- There's no clear understanding as to what constitues a finished product or feature
- The client has no idea what they're actually getting
- Developers are left to figure out the specifics of features based on their own understanding
- Bugs abound

Undocumented requirements lead to miscommunication on all sides. Your understanding of what your building will be completely different from another developers. 

Miscommunication and misunderstanding are the path towards constant reworks, changes, and bug fixes, leading to disrupted deadlines and crazy costs.

To ensure smooth project development, all parts of the product and the process of development should be understood by every team member. 

# What makes good software requirements

Actual software requirements can be either exceptionally detailed, listing every feature to the letter, or just an outline of features. The level of specificity depends on a number of factors.

**High quality requirements** are easily understood by all involved in the project. Someone with little to no technical experience should be able to read these and know what your software is building. However, if you're working with a team of all developers, your requirements can be of course more technical. The point is to write to your audience.

Regardless of how tech-filled your documentation is, there are some general rules for managing requirements. There's even an official standard: IEEE Std 830-1998, “Recommended Practice for Software Requirements Specifications.” Here's what good requirements should look like according to the spec:
1. **Correct.** This one's easy. Your requirements should be verified by the customer and developer to ensure they're agreed upon.
2. **Unambiguous.** There should be no chances for miscommunication. Requirements should only have one possible interpretation
3. **Complete.** The more complex the application, the more detailed a requirements list should be. 
4. **Consistent.** Language should be consistent, and no contradictions should exist.
5. **Ranked for importance and/or stability.** In most cases, there are varying stages of I really want this, to this is necessary. it's important to label how important each feature is to be able to create a step by step plan for the project.
6. **Verifiable.** There must be a way to test each listed requirement. Each requirement should have measurable and concrete concepts.
7. **Modifiable.** IT should be easy to change requirements. 
8. **Traceable.** It should be able to identify the why of each requirement.

In the end, the best requirements list is the one that works for your team.  You don't always need to have every one of these points for all the projects you work on, the simple one page landing site will obviously be must easier to set out requirements than the massive cross platform application. 

# Conclusion
Your requirements should:
- Understand the goal
- Estimate development costs
- Create an accurate schedule
- Set priorities for your developers

Whether to document requirements is something every developer decides for themselves, along with the scale. Questions? Comments? Feel free to contact me. 
