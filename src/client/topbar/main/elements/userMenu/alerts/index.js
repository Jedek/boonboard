import React        from 'react'

var Alert = React.createClass({
    render: function() {
        return (
            <li className="dropdown"><a data-hover="dropdown" href="#" className="dropdown-toggle"><i className="fa fa-bell fa-fw"></i><span className="badge badge-yellow">1</span></a>

            </li>
        );
    }
});

export default Alert

