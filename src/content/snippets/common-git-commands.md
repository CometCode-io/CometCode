---
layout: snippet
title: 'Common Git Commands'
author: [Caelin]
tags: [Git]
date: '2020-05-10'
excerpt: The most common git commands you'll be using every day
---

# Tell Git Who You Are
Configure the author name and email that'll be attached to your commits. 
```shell
git config --global user.name "Sam Smith"
git config --global user.email sam@example.com
```

# Create a New Local Repository
```shell
git init
```

# Checkout a remote repository
```shell
git clone <repoLink>
```


# Add Files
Add files to your "index" for staging
```shell
git add <filename>  # Add a single file
git add ./path/to/file # Add a file in a different place
git add . # Add all files in the current directory
git add * # Add all files
```

# Commit
```shell
git commit -m "Commit message"  # Commit changes to your head
git commit -am "Commit Message" # Add files that are in your index and commit them
```

# Push
Push all commited changes from local to your origin
```shell
git push origin master
```

# Status
List your changed files and those you still need to add or commit
```shell
git status
```

# Branches
```shell
git checkout -b <branchname> # Create a new branch and switch to it
git checkout <branchname> # Switch to an existing branch
git branch <branchname> # Create a new branch 
git branch -d <branchname> # Delete a branch 
git push origin <branchname> # Push a specific branch to origin 
git push  --all origin # Push all branches to origin 
```

# Update from the remote repository
```shell
git pull # Pull from the remote repository
git merge <branchanme> # Merge another branch into the current one
git diff # See all the differences between branch
```
