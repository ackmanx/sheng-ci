import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import app from './reducers/app'
import categories from './reducers/categories'
import entries from './reducers/entries'

const initialState = {
    app: {},
    categories: {},
    entries: {},
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
        <App/>
    </Provider>,
    document.getElementById('root')
)
