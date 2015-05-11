import React from 'react'

var style = {
    width: '100%',
    height : '300px'
};


var Statistics = React.createClass({
    componentDidMount: function(){
        $("#cpu-chart").highcharts({
            chart: {
                zoomType: 'x'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 24 * 3600 * 1000
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                pointStart: 0,
                pointInterval: 3600 * 1000 // one hour
            }]
        });
    },
    render: function() {
        return(
            <div className="page-content">
                <div id="tab-general">
                    <div className="col-lg-6">
                            <div className="portlet box">
                                <div className="portlet-header">
                                    <div className="caption">CPU Load</div>
                                </div>
                                <div className="portlet-body">
                                    <div id="cpu-chart" style={style}></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Statistics