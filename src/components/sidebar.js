import React from 'react'
import './sidebar.css'
import {uuidv4} from '../dumping-grounds'
import {connect} from 'react-redux'
import getCategories from '../actions/get-categories'

export class Sidebar extends React.Component {
    static defaultProps = {
        categories: {}
    }

    constructor(props) {
        super(props)
        props.getCategories()
    }

    render() {
        const {categories} = this.props

        return (
            <div className='sidebar'>
                <div className='add-category'>+ New Category</div>
                <ul>
                    {Object.keys(categories).map(categoryId => <li key={uuidv4()}>{categories[categoryId].name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
