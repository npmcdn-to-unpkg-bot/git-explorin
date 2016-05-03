#!/bin/sh
IFS= read -r -p "Enter a commit message: " commit_message

npm run prod

echo

git add .
git commit -m "$commit_message"
git push origin development

echo

git checkout master
git merge development
git add .
git commit -m "$commit_message"
git subtree push --prefix dist origin master

echo

git checkout development