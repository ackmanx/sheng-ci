import {CANCEL_NEW_CATEGORY, GET_CATEGORIES_PAYLOAD, NEW_CATEGORY_PLACEHOLDER, SUBMIT_NEW_CATEGORY_PAYLOAD} from '../actions/action-types'

export default function categories(state = {}, action = {}) {

    switch (action.type) {
        case GET_CATEGORIES_PAYLOAD:
            return {...state, data: action.categories}

        case NEW_CATEGORY_PLACEHOLDER:
            return {...state, showNewCategoryPlaceholder: true}

        case SUBMIT_NEW_CATEGORY_PAYLOAD:
            return {...state, showNewCategoryPlaceholder: false, name: ''}

        case CANCEL_NEW_CATEGORY:
            return {...state, showNewCategoryPlaceholder: false, name: ''}

        default:
            return state
    }
}
