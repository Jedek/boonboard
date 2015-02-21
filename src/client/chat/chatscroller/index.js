import React from 'react'

var ChatScroller = React.createClass({
    render: function() {
        return (
            <div className="chat-scroller">
                <ul className="chats" id="the_chat">

                </ul>
            </div>
        );
    }
});

export default ChatScroller
