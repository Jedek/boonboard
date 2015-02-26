import React from 'react'

var ListItem = React.createClass({
    render: function(){
        var theClass = "fa " + this.props.class + " fa-fw",
            active=(this.props.page == this.props.title.toLowerCase())?"active":"";

        return(
            <li className={active}>
                <a href={this.props.url}>
                    <i className={theClass}><div className="icon-bg bg-orange"></div></i>
                    <span className="menu-title">{this.props.title}</span>
                </a>
            </li>
        );
    }
});

export default ListItem;