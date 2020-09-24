import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../Styling/MessageList.css'


class MessageList extends Component {

    static propTypes = {
        message: PropTypes.arrayOf(PropTypes.object)
    }

    static defaultProps = {
        messages: [],
    }

    render(){
        return(
            <div className="MessageList">
                {this.props.messages.map((message,i)=>(
                    <div>
                        {message.author && (
                            <span className="author">{message.author}</span>
                        )}
                        {message.body}
                    </div>
                ))}
            </div>
            
        )
    }
}
export default MessageList