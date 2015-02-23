import React        from 'react'

var NewsBox = React.createClass({
    componentDidMount: function(){
        $('#news-update').ticker({
            controls: false,
            titleText: ''
        });
    },
    render: function() {
        return (
            <ul id="news-update" className="ticker list-unstyled">
                <li>Welcome to BoonBoard!</li>
            </ul>
        );
    }
});

export default NewsBox

