import React from 'react';
import './User.scss'

function User(props) {
    return (
        <div className='user'>
            <img className='user__avatar' src='' alt=''></img>
            <p className='user__name'>Kristina</p>
            <p className='user__position'>менеджер продаж</p>
        </div>
    );
}

export default User;