import React from 'react'
import Title from './title'
import BreadCrumbs from './breadcrumbs'

var TitleBar = React.createClass({
    render: function() {
        return(
            <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
                <Title title={this.props.page} />
                <!--<BreadCrumbs />-->
            </div>
        );
    }
});

export default TitleBar
