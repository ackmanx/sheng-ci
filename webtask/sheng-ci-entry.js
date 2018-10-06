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

/*
 * Contract:
 * {
 *   id: String
 *   categoryId: String
 *   hanzi: String
 *   pinyin: String
 *   english: String
 * }
 */
//todo: update with new structure because entries are all in arrays with categoryId as key
app.post('/', function (req, res) {
    req.webtaskContext.storage.get(function (error, entries = {}) {
        if (error) {
            return res.json({message: 'Error getting from storage before saving', error})
        }

        //todo: when I do entry updates, I'll have to change this to search first
        entries[req.body.categoryId].push({
            id: uuidv4(),
            categoryId: req.body.categoryId,
            hanzi: req.body.hanzi,
            pinyin: req.body.pinyin,
            english: req.body.english,
        })

        req.webtaskContext.storage.set(entries, function (error) {
            if (error) {
                return res.json({message: 'Error saving to storage', error})
            }

            res.json({message: 'Saved!', saved: entries[req.body.id]})
        })
    })
})

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

module.exports = Webtask.fromExpress(app)
