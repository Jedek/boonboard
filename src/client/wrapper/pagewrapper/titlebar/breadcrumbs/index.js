import React from 'react'

var BreadCrumbs = React.createClass({
    render: function(){
        return(
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Dashboard</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Dashboard</li>
            </ol>

        );
    }
});

export default BreadCrumbs