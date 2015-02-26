import React    from 'react'
import Menu     from './menu'
var SideBar = React.createClass({
    render: function() {
        return (
            <nav id="sidebar" role="navigation" data-step="2" data-position="right" className="navbar-default navbar-static-side">
                <div className="sidebar-collapse menu-scroll">
                    <Menu page={this.props.page} />
                </div>
            </nav>
        );
    }
});

export default SideBar

