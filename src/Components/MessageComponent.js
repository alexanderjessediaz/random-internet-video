import React, {Component} from 'react'
import MessageList from './MessageList'
import '../Styling/App.css'

class MessageComponent extends Component {

    state = {
        messages: [
          {body: "Connecting..."},
          {author: "You", body: "Hello!", me:true},
          {author: "Them",body: "Hey!"},
        ],
      }

    render(){
        return(
            <div className="MessageComponent">
                <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}

export default MessageComponent