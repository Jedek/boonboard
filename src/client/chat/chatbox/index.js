import React from 'react'

var ChatBox = React.createClass({
    sendChat: function(){

        var msg = document.getElementById("input-chat");
        socket.emit(this.props.events.chat.send,msg.value);
        msg.value="";
    },
    render: function() {
        return (
            <div className="chat-form">
                <div className="input-group">
                    <input id="input-chat" type="text" placeholder="Type a message here..." className="form-control" />
                        <span id="btn-chat" className="input-group-btn">
                            <button type="button" onClick={this.sendChat} className="btn btn-green">
                                <i class="fa fa-check">Send!</i>
                            </button>
                        </span>
                </div>
            </div>
        );
    }
});

export default ChatBox
