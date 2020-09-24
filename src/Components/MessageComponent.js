import React, {Component} from 'react'
import MessageList from './MessageList'
import '../Styling/App.css'

class MessageComponent extends Component {
    render(){
        return(
            <div className="MessageComponent">
                <MessageList/>
            </div>
        )
    }
}

export default MessageComponent