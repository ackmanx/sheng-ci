import React from 'react'
import './sidebar.css'
import {v4 as uuid} from 'uuid'
import {connect} from 'react-redux'
import getCategories from '../../actions/get-categories'
import {CANCEL_NEW_CATEGORY, NEW_CATEGORY_PLACEHOLDER, SHOW_CATEGORY} from '../../actions/action-types'
import submitNewCategory from '../../actions/submit-new-category'

export class Sidebar extends React.Component {
    static defaultProps = {
        categories: {}
    }

    constructor(props) {
        super(props)
        this.submitNewCategory = this.submitNewCategory.bind(this)
        props.getCategories()
    }

    render() {
        const {
            categories,
            showCategory,
            currentCategoryId,
            addNewCategoryPlaceholder,
            showNewCategoryPlaceholder
        } = this.props

        return (
            <div className='sidebar'>
                <div className='add-category'
                     onClick={addNewCategoryPlaceholder}>
                    + New Category
                </div>
                <ul>
                    <li className={currentCategoryId === 'ALL' ? 'current-category' : ''}
                        onClick={() => showCategory('ALL')}>
                        All Categories
                    </li>
                    {showNewCategoryPlaceholder && (
                        <li>
                            <input autoFocus
                                   placeholder='new category name'
                                   onKeyDown={this.submitNewCategory}
                                   onKeyPress={this.submitNewCategory}/>
                        </li>
                    )}
                    {Object.keys(categories).map(categoryId => (
                        <li key={uuid()}
                            className={currentCategoryId === categoryId ? 'current-category' : ''}
                            onClick={() => showCategory(categoryId)}>
                            {categories[categoryId].name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    submitNewCategory(event) {
        if (event.key === 'Enter') {
            this.props.submitNewCategoryAction(event.target.value)
        }
        else if (event.key === 'Escape') {
            this.props.cancelNewCategory()
        }
    }
}

const mapStateToProps = state => ({
    categories: state.categories.data,
    showNewCategoryPlaceholder: state.categories.showNewCategoryPlaceholder,
    currentCategoryId: state.app.currentCategoryId,
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    showCategory: categoryId => dispatch({type: SHOW_CATEGORY, categoryId}),
    addNewCategoryPlaceholder: () => dispatch({type: NEW_CATEGORY_PLACEHOLDER}),
    submitNewCategoryAction: name => dispatch(submitNewCategory(name)),
    cancelNewCategory: () => dispatch({type: CANCEL_NEW_CATEGORY}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
