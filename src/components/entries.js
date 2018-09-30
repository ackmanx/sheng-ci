import React from 'react'
import './entries.css'
import connect from 'react-redux/es/connect/connect'
import getAllEntries from '../actions/get-all-entries'
import {uuidv4} from '../dumping-grounds'

export class Entries extends React.Component {
    static defaultProps = {
        entries: {}
    }

    constructor(props) {
        super(props)
        props.getAllEntries()
    }

    render() {
        const {entries} = this.props

        let allEntries = []

        Object.keys(entries).forEach(categoryId => {
            allEntries = allEntries.concat(entries[categoryId])
        })

        return (
            <div className='entries-panel'>
                {allEntries.map(entry =>
                    <div key={uuidv4()} className="entry">
                        <div>{entry.hanzi}</div>
                        <div>{entry.pinyin}</div>
                        <div>{entry.english}</div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    entries: state.entries
})

const mapDispatchToProps = dispatch => ({
    getAllEntries: () => dispatch(getAllEntries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
