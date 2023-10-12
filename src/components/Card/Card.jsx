import React from 'react';
import './Card.scss';

function Card({title}) {
    return (
        <div className='card'>
            <p className='card__title'>{title}</p>
        </div>
    );
}

export default Card;