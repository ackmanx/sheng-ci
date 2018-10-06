import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import app from './reducers/app'
import categories from './reducers/categories'
import entries from './reducers/entries'
import addNewEntry from './reducers/add-new-entry'

const initialState = {
    app: {
        currentCategoryId: 'ALL',
    },
    categories: {},
    entries: {},
}

const store = createStore(
    combineReducers({
        app,
        categories,
        entries,
        addNewEntry,
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
