import React from 'react'
import './entries.css'
import connect from 'react-redux/es/connect/connect'
import getAllEntries from '../../actions/get-all-entries'
import {uuidv4} from '../../dumping-grounds'
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

        let entriesToShow = []

        if (currentCategoryId === 'ALL') {
            Object.keys(entries).forEach(categoryId => {
                entriesToShow = entriesToShow.concat(entries[categoryId])
            })
        }
        else {
            entriesToShow = entries[currentCategoryId]
        }

        return (
            <div className='entries-panel'>
                {currentCategoryId !== 'ALL' && <ConnectedAddNewEntry/>}
                {entriesToShow.map(entry =>
                    <div key={uuidv4()} className="entry">
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
    entries: state.entries,
    currentCategoryId: state.app.currentCategoryId,
})

const mapDispatchToProps = dispatch => ({
    getAllEntries: () => dispatch(getAllEntries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
