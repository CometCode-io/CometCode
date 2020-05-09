---
layout: post
title: 'How to Add Smooth Scroll to your Gatsby Site without Extra Libraries!'
author: [Caelin]
tags: ['Gatsby']
date: '2020-05-09'
excerpt: How to add smooth scroll in your GatsbyJS site without external libraries using CSS!
---

Is your jumpy page scroll annoying the heck out of you? You've come to the right place, in this article you'll learn how to create smooth scrolling links in GatsbyJS that uses the Gatsby `<Link>` element.

For the sake of time, we're going to assume you already have a gatsby site setup, and you're familiar with HTML and Javascript. You can set up a starter site by following [this guide](https://www.gatsbyjs.org/docs/starters/).

## 1. Add an `id` property to the object you want to scroll too
```jsx index.jsx  
<h2 id="header">Header Here</h2>
``` 

## 2. Add a hashtag to the to property on your `<Link>`
Make sure this link matches your target id
```jsx
import React from "react"
import { Link } from "gatsby"

const ScrollToLink = () => (
  // Note that the link is an absolute path, it assumes this is your root page
  <Link to="/#header">Scroll To My Cool Header</Link>
)
```
If you're on a non root path, make it root
```jsx
import React from "react"
import { Link } from "gatsby"

const pageSlug = "/posts/example" // Slug of the page you're currently on
const ScrollToLink = () => (
  // Note that the link is an absolute path, it assumes this is your root page
  <Link to={`${pageSlug}/#header`} />
)
```

## 3. Update your CSS with smooth scroll

I use a global `shared.scss` file, but if you're using CSS in JS, you can wrap everything in a styled component with the scroll behavior

```css shared.css
* {
  scroll-behavior: smooth;
}
```

```jsx smooth-scroll.jsx
import React from "react"

const Smooth = styled.div`
  scroll-behavior: smooth;
`
/**
 * Enable smooth scroll by wrapping your page in this component
**/
const SmoothScroll = ({ children }) => (
  <Smooth>{ children }</Smooth>
)
```

## 4. Celebrate! You did it

***Demo***

This site! If you check out the blog posts, the table of contents has smooth scroll enabled to each header!
