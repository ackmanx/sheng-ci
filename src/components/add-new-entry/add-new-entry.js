import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'
import submitNewEntry from '../../actions/submit-new-entry'
import {UPDATE_ADD_ENTRY} from '../../actions/action-types'
import {uuidv4} from '../../dumping-grounds'

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
                    {['hanzi', 'pinyin', 'english'].map(label => <Group key={uuidv4()}
                                                                        label={label}
                                                                        updateValue={this.updateValue}
                                                                        checkEnterAndSubmit={this.checkEnterAndSubmit}/>)}
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

const Group = props => (
    <div className='group'>
        <label>{props.label}</label>
        <input onBlur={event => props.updateValue(event, props.label)}
               onKeyPress={event => props.checkEnterAndSubmit(event, props.label)}/>
    </div>
)

const mapStateToProps = state => ({
    values: state.addNewEntry
})

const mapDispatchToProps = dispatch => ({
    updateValueAction: (label, value) => dispatch({type: UPDATE_ADD_ENTRY, label, value}),
    submitNewEntryAction: () => dispatch(submitNewEntry()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
