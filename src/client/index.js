import React          from 'react'
import TopBar         from './topbar'
import SideBar        from './sidebar'

var session;

socket.on("initialized", function(){
    if(session === undefined) {
        $.getJSON( "./session", function( data ) {
            session = data;
        });
    }
});

//socket.on("initialized", function(constants){

React.render(<TopBar user={session}/>, document.getElementById("the_top"));
React.render(<SideBar />, document.getElementById("wrapper"));

//});

