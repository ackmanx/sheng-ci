import {UPDATE_ADD_ENTRY} from '../actions/action-types'

export default function addNewEntry(state = {}, action = {}) {
    switch (action.type) {
        case UPDATE_ADD_ENTRY:
            return {...state, [action.label]: action.value}

        default:
            return state
    }
}
