/**
 * This file is hosted on Webtask
 * To update, run npm script webtask-update
 *
 * https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/sheng-ci-category
 */
const express = require('express')
const Webtask = require('webtask-tools')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, categories = {}) {
        if (error) {
            return res.json({message: 'Error getting from storage', error})
        }

        res.json(categories)
    })
})

app.post('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, categories = {}) {
        if (error) {
            return res.json({message: 'Error getting from storage before saving', error})
        }

        categories[req.body.id] = {
            id: req.body.id,
            name: req.body.name,
        }

        req.webtaskContext.storage.set(categories, function (error) {
            if (error) {
                return res.json({message: 'Error saving to storage', error})
            }

            res.json({message: 'Saved!', saved: categories[req.body.id]})
        })
    })
})

module.exports = Webtask.fromExpress(app)
