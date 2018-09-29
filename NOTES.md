fuckingGetIt() {
    fetch(webtaskAPI)
        .then(res => {
            if (res.status !== 200) {
                console.error('Uh oh. The webtask did not work!')
                return
            }

            res.json().then(json => {
                this.setState({vocab: json})
            })
        })
        .catch(e => console.error(e))
}

fuckingSendIt() {
    const queryParams = `id=${new Date().getTime()}&hanzi=${encodeURI(this.state.hanzi)}&pinyin=${this.state.pinyin}&english=${this.state.english}`

    fetch(`${webtaskAPI}?${queryParams}`, {method: 'POST'})
        .then(res => this.fuckingGetIt())
        .catch(err => console.error(err))
}

const webtaskAPI = 'https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/sheng-ci-entry'
const webtaskAPI = 'https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/sheng-ci-category'
