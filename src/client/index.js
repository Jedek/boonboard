import React          from 'react'
import Router         from 'react-router'

import TopBar         from './topbar'
import Wrapper        from './wrapper'
import PageWrapper    from './wrapper/pagewrapper'

/* The pages in our app */
import Index          from './wrapper/pagewrapper/pages/index'
import Login          from './wrapper/pagewrapper/pages/login'
import Raspbian       from './wrapper/pagewrapper/pages/raspbian'
import XBMC           from './wrapper/pagewrapper/pages/xbmc'
import RetroPie       from './wrapper/pagewrapper/pages/retropie'
import Statistics     from './wrapper/pagewrapper/pages/statistics'


var { Route, DefaultRoute, Redirect, RouteHandler, Link } = Router;

socket.on("initialized", function(){
    console.log("got connection with the server");


    socket.on(constants.events.monitor.uptime, function(theUptime){
        console.log("Server uptime is: " + theUptime);
    });
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
        <Route name="dashboard"     sharedHandler={PageWrapper} handler={Index} />
        <Route name="login"         sharedHandler={PageWrapper} handler={Login} />
        <Route name="raspbian"      sharedHandler={PageWrapper} handler={Raspbian} />
        <Route name="xbmc"          sharedHandler={PageWrapper} handler={XBMC} />
        <Route name="retropie"      sharedHandler={PageWrapper} handler={RetroPie} />
        <Route name="statistics"    sharedHandler={PageWrapper} handler={Statistics} />
    </Route>
);


Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('the_content'));
});

