import React from 'react'
import './add-new-entry.css'
import connect from 'react-redux/es/connect/connect'

export class AddNewEntry extends React.Component {
    render() {
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
                    <button>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewEntry)
