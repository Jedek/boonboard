import React        from 'react'
import Header       from './header'
import Main         from './main'

var style = {
    marginBottom: "0"
}

var TopBar = React.createClass({
    render: function() {
        return (
            <nav id="topbar" role="navigation" style={style} data-step="3" className="navbar navbar-default navbar-static-top">
                <Header />
                <Main />
            </nav>
        );
    }
});

export default TopBar

