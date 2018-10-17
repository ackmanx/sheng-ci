import {get_all_entries_payload, update_add_entry_buffer} from '../actions/action-types'

export function entries(state = {}, action = {}) {

    switch (action.type) {
        case get_all_entries_payload:
            return {...state, data: action.entries}

        case update_add_entry_buffer:
            return {...state, [action.label]: action.value}

        default:
            return state
    }
}
