import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MediaQuery from 'react-responsive'
import app from './reducers/app'
import categories from './reducers/categories'
import entries from './reducers/entries'

const initialState = {
    app: {
        currentCategoryId: 'ALL',
    },
    categories: {},
    entries: {
        hanzi: '',
        pinyin: '',
        english: '',
    },
}

const store = createStore(
    combineReducers({
        app,
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
