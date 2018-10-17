import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import {submitNewEntry} from '../../actions/submit-new-entry'
import {update_add_entry_buffer} from '../../actions/action-types'
import {v4 as uuid} from 'uuid'

export class AddNewEntry extends React.Component {

    constructor(props) {
        super(props)
        this.updateValue = this.updateValue.bind(this)
        this.checkEnterAndSubmit = this.checkEnterAndSubmit.bind(this)
        this.validateAndSubmit = this.validateAndSubmit.bind(this)
    }

    render() {
        return (
            <div className='add-new-entry'>
                <div className='inputs'>
                    {['hanzi', 'pinyin', 'english'].map(label => (
                        <div key={uuid()} className='group'>
                            <label>{label}</label>
                            <input onBlur={event => this.updateValue(event, label)}
                                   onKeyPress={event => this.checkEnterAndSubmit(event, label)}/>
                        </div>
                    ))}
                </div>
                <div className='submit'>
                    <button onClick={this.validateAndSubmit}>Add</button>
                </div>
            </div>
        )
    }

    updateValue(event, label) {
        this.props.updateValueAction(label, event.target.value)
    }

    checkEnterAndSubmit(event, label) {
        if (event.key === 'Enter') {
            this.updateValue(event, label)
            this.validateAndSubmit()
        }
    }

    validateAndSubmit() {
        if (Object.keys(this.props.values).length >= 2) {
            this.props.submitNewEntryAction()
        }
    }
}

const mapStateToProps = state => ({
    values: state.entries.data
})

const mapDispatchToProps = dispatch => ({
    updateValueAction: (label, value) => dispatch({type: update_add_entry_buffer, label, value}),
    submitNewEntryAction: () => dispatch(submitNewEntry()),
})

export const ConnectedAddNewEntry = connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
