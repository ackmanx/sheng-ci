import {GET_CATEGORIES} from '../actions/action-types'

export default function categories(state = {}, action = {}) {

    switch (action.type) {
        case GET_CATEGORIES:
            return action.categories

        default:
            return state
    }
}
