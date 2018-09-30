import {combineReducers} from 'redux'
import app from './app'
import entries from './entries'
import categories from './categories'

export default combineReducers({
    app,
    categories,
    entries,
})
