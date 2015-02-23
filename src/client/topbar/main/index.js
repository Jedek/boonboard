import React        from 'react'
import MenuButton   from './elements/menuButton'
import News   from './elements/news'
import Search   from './elements/search'
import UserMenu   from './elements/userMenu'

var Main = React.createClass({
    render: function() {
        return (
            <div className="topbar-main">
                <MenuButton />
                <News data={this.props.data} />
                <UserMenu />
            </div>
        );
    }
});

export default Main

