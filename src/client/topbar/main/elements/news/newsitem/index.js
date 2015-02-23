import React        from 'react'

var NewsItem = React.createClass({
    render: function() {
        return (
            <li>{this.props.item}</li>
        );
    }
});

export default NewsItem

