# Monday Notes, 4/7/17

## Some notes on Monday to practice using Git

In terminal type pwd to see the present working directory
go to the folder we want to put it in; then git clone
git status to check that we are on branch master and everything is clean

do first for any project: make sure the readme is up to date (written in markdown)

* git add - is like a staging step (it is called staging)
* git commit - you finalize your gits in a repository
* later we will need to push it to github. it is only in our directory right now.
* it is considered bad form to modify an existing commit--it should be ready to go when you share it with the world

* Once there has been a change, git status will show you have changes that haven't been committed
* you can commit all the changes by using:
git add notes/monday.md again
* git push origin master
* instead of that, let's only update the lines we have changed.
* git add -p     <— lets you see only the lines changed from the last version of the file and decide if you want to stage them or not. The additions will be in green, the subtractions will be in red. Enter y or n at the prompt.
