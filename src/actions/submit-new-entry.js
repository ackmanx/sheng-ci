import {webtaskEntry} from '../dumping-grounds'
import {SUBMIT_NEW_ENTRY} from './action-types'
import getAllEntries from './get-all-entries'

export default function submitNewEntry() {
    return (dispatch, getState) => {
        const state = getState()

        const body = {
            categoryId: state.app.currentCategoryId,
            hanzi: state.entries.hanzi.trim(),
            pinyin: state.entries.pinyin.trim(),
            english: state.entries.english.trim(),
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

                res.json().then(json => {
                    dispatch({type: SUBMIT_NEW_ENTRY})
                    dispatch(getAllEntries())
                })
            })
            .catch(e => console.error(e))
    }
}
