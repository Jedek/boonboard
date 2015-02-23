import React        from 'react'

var Menu = React.createClass({
    render: function() {
        return (
            <a id="menu-toggle" href="#" className="hidden-xs"><i className="fa fa-bars"></i></a>
        );
    }
});

export default Menu

