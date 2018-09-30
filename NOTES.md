fuckingSendIt() {
    const queryParams = `id=${new Date().getTime()}&hanzi=${encodeURI(this.state.hanzi)}&pinyin=${this.state.pinyin}&english=${this.state.english}`

    fetch(`${webtaskAPI}?${queryParams}`, {method: 'POST'})
        .then(res => this.fuckingGetIt())
        .catch(err => console.error(err))
}


