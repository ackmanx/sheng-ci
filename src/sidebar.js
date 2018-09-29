import React from 'react'
import './sidebar.css'
import {uuidv4} from "./dumping-grounds";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='add-category'>+ New Category</div>
                <ul>
                    {Object.keys(this.props.categories).map(categoryId => {
                        const category = this.props.categories[categoryId]
                        return <li key={uuidv4()}>{category.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
