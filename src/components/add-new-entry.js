import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import submitNewEntry from '../actions/submit-new-entry'

export class AddNewEntry extends React.Component {
    render() {
        const {submitNewEntry} = this.props

        return (
            <div className='add-new-entry'>
                <div className='inputs'>
                    <div className='group'>
                        <label>Hanzi</label>
                        <input/>
                    </div>
                    <div className='group'>
                        <label>Pinyin</label>
                        <input/>
                    </div>
                    <div className='group'>
                        <label>English</label>
                        <input/>
                    </div>
                </div>
                <div className='submit'>
                    <button onClick={submitNewEntry}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    submitNewEntry: () => dispatch(submitNewEntry())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
