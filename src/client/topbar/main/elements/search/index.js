import React        from 'react'

var Search = React.createClass({
    render: function() {
        return (
            <form id="topbar-search" action="" method="" className="hidden-sm hidden-xs">
                <div className="input-icon right text-white"><a href="#"><i className="fa fa-search"></i></a><input type="text" placeholder="Search here..." className="form-control text-white"/></div>
            </form>
        );
    }
});

export default Search

