import React        from 'react'

var SideBar = React.createClass({
    render: function() {
        return (
            <nav id="sidebar" role="navigation" data-step="2" data-intro="Template has &lt;b&gt;many navigation styles&lt;/b&gt;" data-position="right" className="navbar-default navbar-static-side">
                <div className="sidebar-collapse menu-scroll">
                    <ul id="side-menu" className="nav">
                        <div className="clearfix"></div>
                        <li className="active"><a href="dashboard.html"><i className="fa fa-tachometer fa-fw">
                            <div className="icon-bg bg-orange"></div>
                        </i><span className="menu-title">Dashboard</span></a></li>

                        <li><a href="dashboard.html"><i className="fa fa-linux fa-fw">
                            <div className="icon-bg bg-orange"></div>
                        </i><span className="menu-title">Raspbian</span></a></li>

                        <li><a href="dashboard.html"><i className="fa fa-play fa-fw">
                            <div className="icon-bg bg-orange"></div>
                        </i><span className="menu-title">XBMC</span></a></li>

                        <li><a href="dashboard.html"><i className="fa fa-gamepad fa-fw">
                            <div className="icon-bg bg-orange"></div>
                        </i><span className="menu-title">RetroPie</span></a></li>

                        <li><a href="dashboard.html"><i className="fa fa-info fa-fw">
                            <div className="icon-bg bg-orange"></div>
                        </i><span className="menu-title">Statistics</span></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

export default SideBar

