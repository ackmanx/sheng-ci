import {GET_ALL_ENTRIES_PAYLOAD, UPDATE_ADD_ENTRY} from '../actions/action-types'

export default function entries(state = {}, action = {}) {

    switch (action.type) {
        case GET_ALL_ENTRIES_PAYLOAD:
            return {...state, data: action.entries}

        case UPDATE_ADD_ENTRY:
            return {...state, [action.label]: action.value}

        default:
            return state
    }
}
