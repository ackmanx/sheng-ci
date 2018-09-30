import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
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
    //Because middleware and devtools are both enhancers, we combine them into a single argument using redux's compose (like we do with combinedReducers)
    compose(
        applyMiddleware(thunk),
        //Putting this here enables redux devtools extension to work, as per their docs
        //Being this is an Electron app, you also need to install redux dev tools via the code (see node/entry.js)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
