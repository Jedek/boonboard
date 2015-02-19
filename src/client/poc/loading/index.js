/**
 * Created by jeroen.klerk on 2015-02-17.
 */
import React from 'react'
import './style.styl'


var LoadScreen = React.createClass({
    render: function() {
        return (
            <div className='loadScreen'>
                <img src="./images/loader.gif"/>
            </div>
        );
    }
});

export default LoadScreen;