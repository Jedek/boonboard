import React from 'react'

var Title = React.createClass({
    render: function() {
        var title = this.props.title;
        return(
            <div className="page-header pull-left">
                <div className="page-title">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                </div>
            </div>

        );
    }
});

export default Title