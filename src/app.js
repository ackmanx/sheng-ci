import React from 'react'
import './app.css'

const webtaskAPI = 'https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/sheng-ci-entry'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            vocab: {}
        }

        this.fuckingGetIt = this.fuckingGetIt.bind(this)
        this.fuckingSendIt = this.fuckingSendIt.bind(this)

        this.fuckingGetIt()
    }

    render() {
        const {vocab} = this.state

        return (
            <div>
                <h1>Motha-fukkin-vocabulary</h1>

                {Object.keys(vocab).map(id => {
                    const entry = vocab[id]
                    return (
                        <div key={Math.floor(Math.random() * 1000)}>
                            <div>{entry.hanzi}</div>
                            <div>{entry.pinyin}</div>
                            <div>{entry.english}</div>
                            <hr/>
                        </div>
                    )
                })}

                <input id='hanzi' onChange={e => this.setState({hanzi: e.target.value})}/>
                <input id='pinyin' onChange={e => this.setState({pinyin: e.target.value})}/>
                <input id='english' onChange={e => this.setState({english: e.target.value})}/>

                <button onClick={this.fuckingSendIt}>Fucking send it!</button>
            </div>
        )
    }

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
}
