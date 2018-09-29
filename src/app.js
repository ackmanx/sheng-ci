import React from 'react'
import './app.css'
import Sidebar from "./sidebar";
import Main from "./main";
import {webtaskCategory} from "./dumping-grounds";

export default class App extends React.Component {
    state = {
        categories: [],
    }

    constructor() {
        super()
        this.initialize = this.initialize.bind(this)
        this.initialize()
    }

    render() {
        return (
            <div className='app'>
                <Sidebar categories={this.state.categories}/>
                <Main/>
            </div>
        )
    }

    initialize() {
        fetch(webtaskCategory)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => this.setState({categories: json}))
            })
            .catch(e => console.error(e))
    }
}
