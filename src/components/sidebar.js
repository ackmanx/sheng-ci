import React from 'react'
import './sidebar.css'
import {uuidv4} from '../dumping-grounds'
import {connect} from 'react-redux'
import getCategories from '../actions/get-categories'
import {SHOW_CATEGORY} from '../actions/action-types'

export class Sidebar extends React.Component {
    static defaultProps = {
        categories: {}
    }

    constructor(props) {
        super(props)
        props.getCategories()
    }

    render() {
        const {categories, showCategory, currentCategoryId} = this.props

        return (
            <div className='sidebar'>
                <div className='add-category'>+ New Category</div>
                <ul>
                    <li className={currentCategoryId === 'ALL' ? 'current-category' : ''}
                        onClick={() => showCategory('ALL')}>
                        All Categories
                    </li>
                    {Object.keys(categories).map(categoryId => (
                        <li key={uuidv4()}
                            className={currentCategoryId === categoryId ? 'current-category' : ''}
                            onClick={() => showCategory(categoryId)}>
                            {categories[categoryId].name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    currentCategoryId: state.app.currentCategoryId,
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    showCategory: categoryId => dispatch({type: SHOW_CATEGORY, categoryId}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
