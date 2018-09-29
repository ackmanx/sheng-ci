#!/usr/bin/env bash

#Invoke with `npm run webtask-update sheng-ci-entry` for example
#This will copy the file webtask/sheng-ci-entry.js to webtask's servers and update the sheng-ci-entry webtask
wt update $1 "webtask/$1.js"
