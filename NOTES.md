fuckingSendIt() {
    const queryParams = `id=${new Date().getTime()}&hanzi=${encodeURI(this.state.hanzi)}&pinyin=${this.state.pinyin}&english=${this.state.english}`

    fetch(`${webtaskAPI}?${queryParams}`, {method: 'POST'})
        .then(res => this.fuckingGetIt())
        .catch(err => console.error(err))
}


<div className="entry">
    <div>为什么你不爱我</div>
    <div>wei4 shen2 me ni3 nu4 ai4 wo3</div>
    <div>why don't you love me</div>
</div>
