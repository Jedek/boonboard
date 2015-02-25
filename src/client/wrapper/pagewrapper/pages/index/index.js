import React        from 'react'

var Index = React.createClass({
    render: function() {
        return (
            <div className="page-content">
                <div id="tab-general">
                    <div className="col-lg-12">
                        <div className="panel">
                            <h1>Welcome!</h1>
                            <p>Welcome to the Boonooberry Dashboard, BoonBoard! In this dashboard you have total control over te BoonooBerry. You can:</p>
                            <ul>
                                <li>Operate Debian</li>
                                <li>Start or stop XBMC</li>
                                <li>Start or stop RetroPie</li>
                                <li>View statistics</li>
                            </ul>
                            <p>Please go to one of the segments on the left to learn more.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Index

