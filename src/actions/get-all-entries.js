import {webtaskEntryUrl} from '../dumping-grounds'
import {GET_ALL_ENTRIES, GET_ALL_ENTRIES_START, GET_ALL_ENTRIES_STOP} from './action-types'

export default function getAllEntries() {
    return dispatch => {
        dispatch({type: GET_ALL_ENTRIES_START})

        fetch(webtaskEntryUrl)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: GET_ALL_ENTRIES, entries: json}))
            })
            .catch(e => console.error(e))
            .finally(() => dispatch({type: GET_ALL_ENTRIES_STOP}))
    }
}
