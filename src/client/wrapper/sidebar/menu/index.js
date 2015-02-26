import React        from 'react'
import ListItem     from './listitem'

var Menu = React.createClass({
    render: function(){
        return(
            <ul id="side-menu" className="nav">
                <div className="clearfix"></div>
                <ListItem page={this.props.page} url="dashboard"    class="fa-tachometer" title="Dashboard" />
                <ListItem page={this.props.page} url="raspbian"     class="fa-linux"      title="Raspbian" />
                <ListItem page={this.props.page} url="xbmc"         class="fa-play"       title="XBMC" />
                <ListItem page={this.props.page} url="retropie"     class="fa-gamepad"    title="RetroPie" />
                <ListItem page={this.props.page} url="statistics"   class="fa-info"       title="Statistics" />
            </ul>
        );
    }
});

export default Menu