import React            from 'react'
import Router           from 'react-router'
var { Route, Redirect, RouteHandler, Link } = Router;

import TitleBar         from './titlebar'

var PageWrapper = React.createClass({
    render: function(){
        return(
            <div id="page-wrapper">
                <TitleBar page={this.props.page} />
                <RouteHandler key={name} />
            </div>
        );
    }
});

export default PageWrapper