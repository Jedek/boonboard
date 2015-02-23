import React        from 'react'
import Alert        from './alerts'
import Tasks        from './tasks'
import User         from './user'

var UserMenu = React.createClass({
    render: function() {
        return (
            <ul className="nav navbar navbar-top-links navbar-right mbn">
                <Alert />
                <Tasks />
                <User />
            </ul>
        );
    }
});

export default UserMenu

