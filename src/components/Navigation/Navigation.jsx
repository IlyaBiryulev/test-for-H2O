import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import box from '../../assets/icons/box.svg';
import calendar from '../../assets/icons/calendar.svg';
import list from '../../assets/icons/list.svg';
import employees from '../../assets/icons/employees.svg';
import stats from '../../assets/icons/stats.svg';
import settings from '../../assets/icons/settings.svg';

function Navigation(props) {
    return (
        <div className='navigation'>
            <div className='navigation__logo'></div>
            <ul className='navigation__list'>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/calendar'><img className='navigation__icon' src={calendar}  alt="" /></NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/list'><img className='navigation__icon' src={list} alt="" /></NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/box'><img className='navigation__icon' src={box} alt="" /></NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/employees'><img className='navigation__icon' src={employees} alt="" /></NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/stats'><img className='navigation__icon' src={stats} alt="" /></NavLink></li>
                <li className='navigation__list-item'><NavLink className='navigation__link' to='/settings'><img className='navigation__icon' src={settings} alt="" /></NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;