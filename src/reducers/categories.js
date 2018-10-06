import {GET_CATEGORIES} from '../actions/action-types'

export default function categories(state = {}, action = {}) {

    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, data: action.categories}

        default:
            return state
    }
}
