import React          from 'react'
import ChatBox        from './chatbox'
import LoadScreen     from './loading'

var events;

console.log("waiting for constants...");

socket.on("initialized", function(constants){
    events = constants.events;
    console.log("Received constants!: " + events);


    socket.on(events.chat.receive, function(msg){
        var node        = document.createElement("LI"),
            textnode    = document.createTextNode(msg);

        node.appendChild(textnode);

        document.getElementById("messages").appendChild(node);
    });

    socket.on(events.authentication.logged_in, function(msg){
        var node        = document.createElement("LI"),
            textnode    = document.createTextNode(msg);

        node.appendChild(textnode);

        document.getElementById("messages").appendChild(node);
    });

    socket.on(events.authentication.logged_out, function(msg){
        var node        = document.createElement("LI"),
            textnode    = document.createTextNode(msg);

        node.appendChild(textnode);

        document.getElementById("messages").appendChild(node);
    });

    render(<ChatBox events={events} />, document.getElementById("chat"));
});

render(<LoadScreen/>, document.getElementById("chat"));

function render(material, target){
    React.render(
        material,
        target
    );
}
