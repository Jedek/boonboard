import React          from 'react'
import TopBar         from './topbar'
import SideBar        from './sidebar'

socket.on("initialized", function(constants){
    React.render(<TopBar/>, document.getElementById("the_top"));
    React.render(<SideBar />, document.getElementById("wrapper"));
});

