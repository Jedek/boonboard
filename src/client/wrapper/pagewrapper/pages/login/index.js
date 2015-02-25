import React        from 'react'

var Login = React.createClass({
    render: function() {
        return (
            <div className="page-content">
                <h1>Welcome to BoonBoard!</h1>
                <p>This is the operating platform for Boonooberry-pi. Please login below to begin.</p>
                <a href="/auth/google" className="btn btn-primary">Sign in with Google</a>
            </div>
        );
    }
});

export default Login

