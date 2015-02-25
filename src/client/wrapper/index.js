import React            from 'react'

import SideBar          from './sidebar'
import PageWrapper      from './pagewrapper'

var Wrapper = React.createClass({
    render: function(){
        return(
            <div id="wrapper">
                <SideBar />
                <PageWrapper page={this.props.page} />
            </div>
        );
    }
});

export default Wrapper

