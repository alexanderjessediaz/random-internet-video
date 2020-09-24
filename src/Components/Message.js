import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {

    static propTypes = {
        author: PropTypes.string,
        body: PropTypes.string.isRequired,
        me: PropTypes.bool,   
    }

    render(){
        return(
            <div className="Message">
                {this.props.author && (
                    <span className="author">{this.props.author}:</span>
                )}
                {this.props.body}
            </div>
        )
    }
}

export default Message