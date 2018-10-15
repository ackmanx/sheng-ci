import {webtaskCategoryUrl} from '../dumping-grounds'
import {SUBMIT_NEW_CATEGORY_PAYLOAD, SUBMIT_NEW_CATEGORY_START, SUBMIT_NEW_CATEGORY_STOP} from './action-types'
import getCategories from './get-categories'

export default function submitNewCategory(name) {
    return dispatch => {
        dispatch({type: SUBMIT_NEW_CATEGORY_START})

        fetch(webtaskCategoryUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name}),
            })
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => {
                    dispatch({type: SUBMIT_NEW_CATEGORY_PAYLOAD})
                    dispatch(getCategories())
                })
            })
            .catch(e => console.error(e))
            .finally(() => dispatch({type: SUBMIT_NEW_CATEGORY_STOP}))
    }
}
