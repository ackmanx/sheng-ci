import {webtaskCategoryUrl} from '../dumping-grounds'
import {GET_CATEGORIES_PAYLOAD, GET_CATEGORIES_START, GET_CATEGORIES_STOP} from './action-types'

export default function getCategories() {
    return dispatch => {
        dispatch({type: GET_CATEGORIES_START})

        fetch(webtaskCategoryUrl)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: GET_CATEGORIES_PAYLOAD, categories: json}))
            })
            .catch(e => console.error(e))
            .finally(() => dispatch({type: GET_CATEGORIES_STOP}))
    }
}
