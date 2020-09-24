import React, {Component} from 'react'
import '../Styling/MessageList.css'


class MessageList extends Component {

    render(){
        return(
            <div className="MessageList">
                <div>Connecting...</div>

                <div><span className="author">You:</span>Hello!</div>

                <div><span className="author">You:</span>Hey!</div>
            </div>
            
        )
    }
}
export default MessageList