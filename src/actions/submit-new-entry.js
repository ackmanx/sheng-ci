import {webtaskEntryUrl} from '../dumping-grounds'
import {SUBMIT_NEW_ENTRY_PAYLOAD, SUBMIT_NEW_ENTRY_START, SUBMIT_NEW_ENTRY_STOP} from './action-types'
import getAllEntries from './get-all-entries'

export default function submitNewEntry() {
    return (dispatch, getState) => {
        dispatch({type: SUBMIT_NEW_ENTRY_START})

        const state = getState()
        const body = {
            categoryId: state.app.currentCategoryId,
            hanzi: state.entries.hanzi.trim(),
            pinyin: state.entries.pinyin.trim(),
            english: state.entries.english.trim(),
        }

        fetch(webtaskEntryUrl,
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
                    dispatch({type: SUBMIT_NEW_ENTRY_PAYLOAD})
                    dispatch(getAllEntries())
                })
            })
            .catch(e => console.error(e))
            .finally(() => dispatch({type: SUBMIT_NEW_ENTRY_STOP}))
    }
}
