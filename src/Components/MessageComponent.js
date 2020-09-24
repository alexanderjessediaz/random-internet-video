import React, {Component} from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import '../Styling/App.css'

class MessageComponent extends Component {

    state = {
        messages: []
      }

      handleNewMessage = (text) => {
          this.setState({
              messages: [...this.state.messages, {me:true, author:"Me", body: text}]
          })
      }

    render(){
        return(
            <div className="MessageComponent">
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessageSend={this.handleNewMessage}/>
            </div>
        )
    }
}

export default MessageComponent