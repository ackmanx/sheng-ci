import React from 'react'
import './entries.css'
import connect from 'react-redux/es/connect/connect'
import getAllEntries from '../../actions/get-all-entries'
import {v4 as uuid} from 'uuid'
import ConnectedAddNewEntry from '../add-new-entry/add-new-entry'

export class Entries extends React.Component {
    static defaultProps = {
        entries: {}
    }

    constructor(props) {
        super(props)
        props.getAllEntries()
    }

    render() {
        const {currentCategoryId, entries} = this.props

        let entriesToShow = entries[currentCategoryId] || []

        if (currentCategoryId === 'ALL') {
            Object.keys(entries).forEach(categoryId => {
                entriesToShow = entriesToShow.concat(entries[categoryId])
            })
        }

        return (
            <div className='entries-panel'>
                {currentCategoryId !== 'ALL' && <ConnectedAddNewEntry/>}
                {entriesToShow.map(entry =>
                    <div key={uuid()} className='entry'>
                        <div>{entry.hanzi}</div>
                        <div>{entry.pinyin}</div>
                        <div className='english'>{entry.english}</div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    entries: state.entries.data,
    currentCategoryId: state.app.currentCategoryId,
})

const mapDispatchToProps = dispatch => ({
    getAllEntries: () => dispatch(getAllEntries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
