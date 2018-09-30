import {GET_ALL_ENTRIES} from '../actions/action-types'

export default function entries(state = {}, action = {}) {

    switch (action.type) {
        case GET_ALL_ENTRIES:
            return action.entries

        default:
            return state
    }
}
