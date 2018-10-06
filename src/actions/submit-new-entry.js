import {webtaskEntry} from '../dumping-grounds'
import {SUBMIT_NEW_ENTRY} from './action-types'

export default function submitNewEntry() {
    return (dispatch, getState) => {
        const state = getState()

        const body = {
            categoryId: state.app.currentCategoryId,
            hanzi: state.addNewEntry.hanzi,
            pinyin: state.addNewEntry.pinyin,
            english: state.addNewEntry.english,
        }

        fetch(webtaskEntry,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            })
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: SUBMIT_NEW_ENTRY}))
            })
            .catch(e => console.error(e))
    }
}
