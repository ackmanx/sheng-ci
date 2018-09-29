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
    req.webtaskContext.storage.get(function (error, data = {}) {
        let body

        if (error) {
            body = {
                error,
                message: 'Error getting from storage'
            }
        }
        else {
            body = data
        }

        res.json(body)
    })
})

app.post('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, data = {}) {
        if (error) {
            return res.json({error: 'Error getting from storage before saving', message: error})
        }

        if (req.query.id) {
            data[req.query.id] = {
                category: req.query.category,
                hanzi: decodeURI(req.query.hanzi),
                pinyin: req.query.pinyin,
                english: req.query.english,
            }
        }

        req.webtaskContext.storage.set(data, function (error) {
            if (error) {
                return res.json({error: 'Error saving to storage', message: error})
            }

            res.json({message: 'Saved!', saved: data})
        })
    })
})

module.exports = Webtask.fromExpress(app)
