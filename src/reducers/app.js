import {SHOW_CATEGORY} from '../actions/action-types'

export default function app(state = {}, action = {}) {

    switch (action.type) {
        case SHOW_CATEGORY:
            return {...state, currentCategoryId: action.categoryId}

        default:
            return state
    }
}
