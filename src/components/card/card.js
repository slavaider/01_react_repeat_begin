import React from 'react';
import './card.css'

const CardComponent = (props) => {
    const style_bg = {
        background: props.bg,
    }
    return (
        <div className='card'>
            <div style={style_bg} className='card__top'/>
            <h3>{props.bg}</h3>
        </div>
    );
};

export default CardComponent;
