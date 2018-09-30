import React from 'react'
import './app.css'
import ConnectedSidebar from './sidebar'
import Entries from './entries'

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <ConnectedSidebar/>
                <Entries/>
            </div>
        )
    }
}
