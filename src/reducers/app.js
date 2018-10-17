import {show_category} from '../actions/action-types'

export function app(state = {}, action = {}) {

    switch (action.type) {
        case show_category:
            return {...state, currentCategoryId: action.categoryId}

        default:
            return state
    }
}
