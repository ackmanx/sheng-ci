export const webtaskServer = 'https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com'
export const webtaskCategory = `${webtaskServer}/sheng-ci-category`
export const webtaskEntry = `${webtaskServer}/sheng-ci-entry`

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
