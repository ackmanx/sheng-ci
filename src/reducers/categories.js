import {cancel_new_category, get_categories_payload, new_category_placeholder, submit_new_category_payload} from '../actions/action-types'

export function categories(state = {}, action = {}) {

    switch (action.type) {
        case get_categories_payload:
            return {...state, data: action.categories}

        case new_category_placeholder:
            return {...state, showNewCategoryPlaceholder: true}

        case submit_new_category_payload:
            return {...state, showNewCategoryPlaceholder: false, name: ''}

        case cancel_new_category:
            return {...state, showNewCategoryPlaceholder: false, name: ''}

        default:
            return state
    }
}
