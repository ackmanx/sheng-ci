import React from 'react'
import './app.css'
import Sidebar from "./sidebar";
import Main from "./main";

export default class App extends React.Component {
    constructor() {
        super()
        this.initialize = this.initialize.bind(this)
        this.initialize()
    }

    render() {
        return (
            <div className='app'>
                <Sidebar/>
                <Main/>
            </div>
        )
    }

    initialize() {
    }
}
