import React from 'react'

var SubmitForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault()

        var message = document.getElementById("m")
        socket.emit(this.props.events.chat.send, message.value)
        message.value = ""
    },
    render: function() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input id="m" /><button>Send</button>
            </form>
        )
    }
})

export default SubmitForm
