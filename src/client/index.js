import React          from 'react'
import Router         from 'react-router'
import TopBar         from './topbar'
import SideBar        from './sidebar'

import Login          from './pages/login'
import Index          from './pages/index'

var { Route, Redirect, RouteHandler, Link } = Router;

socket.on("initialized", function(){
    console.log("got connection with the server");
});

render(<TopBar />, document.getElementById("the_top"));
render(<SideBar />, document.getElementById("theBar"));

var routes = (
    <Route path="/" handler={Index}>
        <Route name="login" path="login" handler={Login} />
    </Route>
);


Router.run(routes, function (Handler) {
    render(<Handler/>, document.getElementById('page-wrapper'));
});

function render(component, target){
    React.render(component, target);
}

