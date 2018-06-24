#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  git config --global user.name "benhurdavies"
  git config --global user.email "benhurdavies@gmail.com"
  git remote rm origin
  git remote add origin https://benhurdavies:${GITHUB_TOKEN}@github.com/benhurdavies/react-snake-game.git
  npm run deploy
fi