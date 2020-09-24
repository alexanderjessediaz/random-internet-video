import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../Styling/MessageForm.css'

class MessageForm extends Component {
    static propTypes = {
        onMessageSend: PropTypes.func.isRequired,
    }

    componentDidMount = () => {
        this.input.focus()
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.onMessageSend(this.input.value)
        this.input.value = ""
    }

    render(){
        return(

            <form className="MessageForm" onSubmit={this.handleFormSubmit}>
                <div className="input-container">
                    <input 
                        type="text"
                        ref={(node) => (this.input = node)}
                        placeholder="type message...."
                    />
                </div>
                
                <div className="button-container">
                    <button type="submit">
                        Send
                    </button>
                </div>
                
            </form>
        )
    }
}
export default MessageForm