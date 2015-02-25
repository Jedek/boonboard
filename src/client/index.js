import React          from 'react'
import Router         from 'react-router'

import TopBar         from './topbar'
import Wrapper        from './wrapper'
import PageWrapper    from './wrapper/pagewrapper'

/* The pages in our app */
import Index          from './wrapper/pagewrapper/pages/index'
import Login          from './wrapper/pagewrapper/pages/login'


var { Route, DefaultRoute, Redirect, RouteHandler, Link } = Router;

socket.on("initialized", function(){
    console.log("got connection with the server");
});


var App = React.createClass({
    mixins: [Router.State],

    render: function(){
        var name = this.getRoutes().reverse()[0].name;

        return(
            <div>
                <TopBar />
                <Wrapper page={name} />
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route name="home" sharedHandler={PageWrapper} handler={Index} />
        <Route name="login"  sharedHandler={PageWrapper} handler={Login} />
    </Route>
);


Router.run(routes, Router.HistoryLocation, function (Handler) {
    render(<Handler />, document.getElementById('the_content'));
});

function render(component, target){
    React.render(component, target);
}

