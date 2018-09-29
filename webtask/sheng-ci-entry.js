/**
 * This file is hosted on Webtask
 * To update, run npm script webtask-update
 *
 * https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/sheng-ci-entry
 */
const express = require('express')
const Webtask = require('webtask-tools')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, entries = {}) {
        if (error) {
            return res.json({message: 'Error getting from storage', error})
        }

        res.json(entries)
    })
})

app.post('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, entries = {}) {
        if (error) {
            return res.json({message: 'Error getting from storage before saving', error})
        }

        if (req.query.id) {
            entries[req.query.id] = {
                category: req.query.category,
                hanzi: decodeURI(req.query.hanzi),
                pinyin: req.query.pinyin,
                english: req.query.english,
            }
        }

        req.webtaskContext.storage.set(entries, function (error) {
            if (error) {
                return res.json({message: 'Error saving to storage', error})
            }

            res.json({message: 'Saved!', saved: entries})
        })
    })
})

module.exports = Webtask.fromExpress(app)