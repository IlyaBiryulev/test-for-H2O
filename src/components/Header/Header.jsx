import React from 'react';
import './Header.scss';
import User from '../User/User';
import TabsPandel from '../UI/MyTabs/TabsPandel/TabsPandel';
import { statsLabelData } from '../../utils/tabsData';


function Header({value, onChangeTab}) {
    return (
        <div className='header'>
            <div className='header__tab-pandel'>
                <div className='header__arrow_left'></div>
                <div className='header__arrow arrow_right'></div>
                <TabsPandel tabsData={statsLabelData} value={value} onChange={onChangeTab}/>
            </div>
            <User />
        </div>
    );
}

export default Header;