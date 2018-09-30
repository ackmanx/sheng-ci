import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import combinedReducers from './reducers'

const initialState = {
    app: {},
    categories: {},
    entries: {},
}

const store = createStore(
    combinedReducers,
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
