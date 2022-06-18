import React from 'react';
import '../index.css'


export const SingleCardRender = function(props) {
    return (
        <div className='card'>
            <img id='card-image' src={props.img} alt='card-image'/>

            <p>{props.location}</p>
            <p>{props.title}</p>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    )
}

