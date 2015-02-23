import React        from 'react'

var Link = React.createClass({
    render: function() {
        return (
            <a id="logo" href="index.html" className="navbar-brand">
                <span className="fa fa-rocket"></span>
                <span className="logo-text">BoonBoard</span>
            </a>
        );
    }
});

export default Link