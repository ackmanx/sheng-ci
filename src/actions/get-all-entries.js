import {webtaskEntry} from '../dumping-grounds'
import {GET_ALL_ENTRIES} from './action-types'

export default function getAllEntries() {
    return dispatch => {
        fetch(webtaskEntry)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: GET_ALL_ENTRIES, entries: json}))
            })
            .catch(e => console.error(e))
    }
}
