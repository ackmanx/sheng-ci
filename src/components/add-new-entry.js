import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import submitNewEntry from '../actions/submit-new-entry'
import {UPDATE_ADD_ENTRY} from '../actions/action-types'

export class AddNewEntry extends React.Component {

    constructor(props) {
        super(props)
        this.updateValue = this.updateValue.bind(this)
    }

    render() {
        const {submitNewEntry} = this.props

        return (
            <div className='add-new-entry'>
                <div className='inputs'>
                    <div className='group'>
                        <label>Hanzi</label>
                        <input onBlur={event => this.updateValue(event, 'hanzi')}
                               onKeyPress={event => this.checkEnterAndSubmit(event, 'hanzi')}/>
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

    updateValue(event, label) {
        this.props.updateValue(label, event.target.value)
    }

    checkEnterAndSubmit(event, label) {
        if (event.key === 'Enter') {
            this.updateValue(event, label)
            this.props.submitNewEntry()
        }
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    updateValue: (label, value) => dispatch({type: UPDATE_ADD_ENTRY, label, value}),
    submitNewEntry: () => dispatch(submitNewEntry()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
