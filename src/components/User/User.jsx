import React from 'react';
import './User.scss';
import avatar from '../../assets/img/image 1.png'

function User(props) {
    return (
        <div className='user'>
            <img className='user__avatar' src={avatar} alt=''></img>
            <ul className='user__info'>
                <li><p className='user__name'>Kristina</p></li>
                <li><p className='user__position'>менеджер продаж</p></li>
            </ul>
            <div className='user__arrow'></div>
        </div>
    );
}

export default User;