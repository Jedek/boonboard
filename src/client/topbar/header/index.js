import React        from 'react'
import Button       from './elements/button'
import Link         from './elements/link'

var Header = React.createClass({
    render: function() {
        return (
            <div className="navbar-header">
                <Button />
                <Link />
            </div>
        );
    }
});

export default Header