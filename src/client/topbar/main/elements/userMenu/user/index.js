import React        from 'react'

var User = React.createClass({
    render: function() {
        return (
            <li className="dropdown topbar-user">
                <a data-hover="dropdown" href="#" className="dropdown-toggle">
                    <span className="hidden-xs">{this.props.user.displayName}</span>&nbsp;
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-user pull-right">
                    <li><a href="#"><i className="fa fa-user"></i>My Profile</a></li>
                    <li><a href="#"><i className="fa fa-tasks"></i>My Tasks</a></li>
                    <li className="divider"></li>
                    <li><a href="./logout"><i className="fa fa-key"></i>Log Out</a></li>
                </ul>
            </li>
        );
    }
});

export default User