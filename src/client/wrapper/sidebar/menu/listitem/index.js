import React from 'react'

var ListItem = React.createClass({
    render: function(){
        return(
            <li className={this.props.active}>
                <a href={this.props.url}>
                    <i className={this.props.class}><div className="icon-bg bg-orange"></div></i>
                    <span className="menu-title">{this.props.title}</span>
                </a>
            </li>
        );
    }
});

export default ListItem;