import React from 'react';
import './Header.scss';
import User from '../User/User';
import TabsPandel from '../UI/MyTabs/TabsPandel/TabsPandel';


function Header() {
    return (
        <div className='header'>
            <div className='arrow arrow_left'></div>
            <div className='arrow arrow_right'></div>
            <User />
        </div>
    );
}

export default Header;