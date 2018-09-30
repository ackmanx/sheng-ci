import {webtaskCategory} from '../dumping-grounds'
import {GET_CATEGORIES} from './action-types'

export default function getCategories() {
    return dispatch => {
        fetch(webtaskCategory)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: GET_CATEGORIES, categories: json}))
            })
            .catch(e => console.error(e))
    }
}
