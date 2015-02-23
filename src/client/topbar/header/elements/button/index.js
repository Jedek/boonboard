import React        from 'react'

var Button = React.createClass({
    render: function() {
        return (
            <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        );
    }
});

export default Button