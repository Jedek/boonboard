import React        from 'react'
import Messages     from './messages'
import SubmitForm   from './form'
import './style.styl'

var ChatBox = React.createClass({
    render: function() {
        return (
            <div className='chatbox'>
                <Messages />
                <SubmitForm events={this.props.events} />
            </div>
        );
    }
});

export default ChatBox