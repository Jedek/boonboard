import React        from 'react'
import Alert        from './alerts'
import Tasks        from './tasks'
import User         from './user'

var UserMenu = React.createClass({
    load: function(){
        $.ajax({
            url: './session',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.load();
    },
    getInitialState: function() {
        return {data: []};
    },
    render: function() {
        if(this.state.data !== null) {
            return (
                <ul className="nav navbar navbar-top-links navbar-right mbn">
                    <User user={this.state.data} />
                </ul>
            );
        }else {
            return(null);
        }
    }
});

export default UserMenu

