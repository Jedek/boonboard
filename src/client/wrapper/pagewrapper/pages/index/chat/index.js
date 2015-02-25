import React        from 'react'
import ChatScroller     from './chatscroller'
import ChatBox     from './chatbox'

var Chat = React.createClass({
    render: function() {
        return (
            <div className="chatContainer">
                <ChatScroller />
                <ChatBox events={this.props.events} />
            </div>
        );
    }
});

export default Chat