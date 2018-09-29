import React from 'react'
import './app.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.initialize = this.initialize.bind(this)
        this.initialize()
    }

    render() {
        return (
            <div className='app'>
                <div className='sidebar'>
                    <div className='add-category'>+ New Category</div>
                    <ul>
                        <li>Names and Places</li>
                        <li>Grammar</li>
                        <li>The Rest</li>
                    </ul>
                </div>
                <div className='entries-panel'>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                    <div className='entry'>
                        <div>你好</div>
                        <div>ni3 hao3</div>
                        <div>hello</div>
                    </div>
                </div>
            </div>
        )
    }

    initialize() {
    }
}
