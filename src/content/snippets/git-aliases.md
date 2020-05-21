---
layout: snippet
title: 'My Favorite Git Aliases'
author: [Caelin]
tags: [Git]
date: '2020-05-08'
excerpt: How many times a day do you think you use git commands? Speed up your development time with some git aliases
---

You probably use git commands at least 20 times a day if you're a full time deveoper, if not more. That `git add .`, then `git commit -am`, and `git push` sure does get repetitive. What you probably don't know is you can use aliases to make typing these repetive commands faster! Let me show you how

## What are Aliases?
You can think of aliases as shortcuts for bash or zsh, they are variables for normal commands. They must be exported into your current shell environment, which means you should probably put them in your `~/.bashrc` for bash or `~/.zshrc` for zsh.

## What if I'm using Windows?

If you're using windows, first of all, I'm sorry, and second, it's a little different. Aliases or set using `doskey` in windows. Read [this article](https://winaero.com/blog/how-to-set-aliases-for-the-command-prompt-in-windows/) for more information.

## How do I use these?
If you're using bash (default on ubuntu and non MacOS Catalina), open your bashrc using ```nano ~/.bashrc``` and then copy and past the provided code into the bottom of the file, then press `ctrl x` and `y` to save the file. if you're using ZSH (or MacOS Catalina), do the same but run ```nano ~/.zshrc``` instead

Here's my favorites:

```shell script
# Run gpo for git
alias g=git
# Use c "Commet Message"
alias c="git add -A && git commit -m "
# Append your code changes into the last commit (useful if you don't want to create a new commit) and keep the last commit message - amend
alias amend="git add -A && git commit --amend --no-edit"
 # Push to the current remote branch - p
alias p="git push origin $(git rev-parse --abbrev-ref HEAD)"
# Fetch from all the remotes, sync the most recent remote changes from origin, and apply your commits onto them - f
alias f="git fetch --all && git rebase origin/master"
 # Create a new branch - n
alias n="git checkout -b"
```

Wammo kabammo, you did it!
