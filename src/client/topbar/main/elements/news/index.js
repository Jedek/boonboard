import React        from 'react'
import NewsBox      from './newsbox'
import NewsItem     from './newsitem'

var News = React.createClass({
    render: function() {
        return (
            <div className="news-update-box hidden-xs">
                <span className="text-uppercase mrm pull-left text-white">News:</span>
                <NewsBox />
            </div>
        );
    }
});

export default News

