import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './components/app/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MediaQuery from 'react-responsive'
import {app, buffer} from './reducers'
import {categories} from './reducers'
import {entries} from './reducers'

const initialState = {
    app: {
        currentCategoryId: 'ALL',
    },
    buffer: {
        hanzi: '',
        pinyin: '',
        english: '',
    }
}

const store = createStore(
    combineReducers({
        app,
        buffer,
        categories,
        entries,
    }),
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MediaQuery maxWidth={980}>
                <div className='small-view'>
                    <App isLargeView={false}/>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={981}>
                <App isLargeView={true}/>
            </MediaQuery>
        </div>
    </Provider>,
    document.getElementById('root')
)
