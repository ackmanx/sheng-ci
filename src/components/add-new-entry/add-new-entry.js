import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import {submitNewEntry} from '../../actions/submit-new-entry'
import {update_add_entry_buffer} from '../../actions/action-types'

export class AddNewEntry extends React.Component {

    constructor(props) {
        super(props)
        this.updateValue = this.updateValue.bind(this)
        this.validateAndSubmit = this.validateAndSubmit.bind(this)
    }

    render() {
        return (
            <form className='add-new-entry'>
                <div className='inputs'>
                    <div className='group'>
                        <label>hanzi</label>
                        <input type='text' value={this.props.hanzi} onChange={event => this.updateValue(event, 'hanzi')}/>
                    </div>
                    <div className='group'>
                        <label>pinyin</label>
                        <input type='text' value={this.props.pinyin} onChange={event => this.updateValue(event, 'pinyin')}/>
                    </div>
                    <div className='group'>
                        <label>english</label>
                        <input type='text' value={this.props.english} onChange={event => this.updateValue(event, 'english')}/>
                    </div>
                </div>
                <div className='submit'>
                    <button onClick={this.validateAndSubmit}>Add</button>
                </div>
            </form>
        )
    }

    updateValue(event, label) {
        this.props.updateValueAction(label, event.target.value)
    }

    validateAndSubmit(event) {
        //Being my button is in a form, I'm banking on the Enter key submitting the form. As a result though, I need to prevent page reload
        event.preventDefault()

        let validInputs = 0

        for (let key in this.props.buffer) {
            if (this.props.buffer[key]) validInputs++
        }

        if (validInputs >= 2) {
            this.props.submitNewEntryAction()
        }
    }
}

const mapStateToProps = state => ({
    buffer: state.buffer,
    hanzi: state.buffer.hanzi,
    pinyin: state.buffer.pinyin,
    english: state.buffer.english,
})

const mapDispatchToProps = dispatch => ({
    updateValueAction: (label, value) => dispatch({type: update_add_entry_buffer, label, value}),
    submitNewEntryAction: () => dispatch(submitNewEntry()),
})

export const ConnectedAddNewEntry = connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
