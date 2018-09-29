/**
 * This file needs to be copy and pasted into webtask.io/make UI
 * Or, I could download their CLI like a smart person and use that
 *
 * @param context WebtaskContext
 * @param req Express Request
 * @param res Express Response
 */
module.exports = function (context, req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'})

    switch (req.method) {
        case 'GET':
            get(context, res)
            break;

        case 'POST':
            post(context, req, res)
            break;
    }
}

function get(context, res) {
    context.storage.get(function (error, data = {}) {
        let body

        if (error) {
            body = {
                error,
                message:  'Error getting from storage'
            }
        }
        else {
            body = data
        }

        res.end(JSON.stringify(body))
    })
}

function post(context, req, res) {
    context.storage.get(function (error, data = {}) {
        if (error) {
            return res.end(JSON.stringify({error: 'Error getting from storage before saving', message: error}))
        }

        if (req.query.id) {
            data[req.query.id] = {
                category: req.query.category,
                hanzi: decodeURI(req.query.hanzi),
                pinyin: req.query.pinyin,
                english: req.query.english,
            }
        }

        context.storage.set(data, function (error) {
            if (error) {
                return res.end(JSON.stringify({error: 'Error saving to storage', message: error}))
            }

            res.end(JSON.stringify({message: 'Saved!', saved: data}))
        })
    })
}
