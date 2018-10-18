import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import {submitNewEntry} from '../../actions/submit-new-entry'
import {update_add_entry_buffer} from '../../actions/action-types'

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
                    <div className='group'>
                        <label>hanzi</label>
                        <input onBlur={event => this.updateValue(event, 'hanzi')}
                               onKeyPress={event => this.checkEnterAndSubmit(event, 'hanzi')}/>
                    </div>
                    <div className='group'>
                        <label>pinyin</label>
                        <input onBlur={event => this.updateValue(event, 'pinyin')}
                               onKeyPress={event => this.checkEnterAndSubmit(event, 'pinyin')}/>
                    </div>
                    <div className='group'>
                        <label>english</label>
                        <input onBlur={event => this.updateValue(event, 'english')}
                               onKeyPress={event => this.checkEnterAndSubmit(event, 'english')}/>
                    </div>
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
        if (Object.keys(this.props.buffer).length >= 2) {
            this.props.submitNewEntryAction()
        }
    }
}

const mapStateToProps = state => ({
    buffer: state.buffer
})

const mapDispatchToProps = dispatch => ({
    updateValueAction: (label, value) => dispatch({type: update_add_entry_buffer, label, value}),
    submitNewEntryAction: () => dispatch(submitNewEntry()),
})

export const ConnectedAddNewEntry = connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
