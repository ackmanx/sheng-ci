#!/usr/bin/env bash

#Invoke with `npm run webtask-update sheng-ci` for example
#This will copy the file webtask/sheng-ci.js to webtask's servers and update the sheng-ci webtask
wt update $1 "webtask/$1.js"
