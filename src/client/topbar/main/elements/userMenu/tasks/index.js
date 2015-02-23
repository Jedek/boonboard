import React        from 'react'

var Tasks = React.createClass({
    render: function() {
        return (
            <li className="dropdown"><a data-hover="dropdown" href="#" className="dropdown-toggle"><i className="fa fa-tasks fa-fw"></i><span className="badge badge-green">2</span></a>

            </li>
        );
    }
});

export default Tasks

