import React          from 'react'
import Chat        from './chat'

var events;

console.log("waiting for constants...");

socket.on("initialized", function(constants){

    socket.emit('user', 'Jedek');


    events = constants.events;
    console.log("Received constants!: " + events);

    socket.on(events.chat.receive, function(msg){
        setChatMessage(msg);
    });

    socket.on(events.authentication.logged_in, function(msg){
        setChatMessage(msg);
    });

    socket.on(events.authentication.logged_out, function(msg){
        setChatMessage(msg);
    });

    render(<Chat events={events} />, document.getElementById("chats"));
});

function setChatMessage(msg) {
    var node        = document.createElement("LI"),
        textnode    = document.createTextNode(msg);

    node.appendChild(textnode);

    document.getElementById("the_chat").appendChild(node);
}

function render(material, target){
    React.render(
        material,
        target
    );
}
