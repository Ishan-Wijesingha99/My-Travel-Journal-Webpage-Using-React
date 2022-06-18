import React from 'react';
import '../index.css'


export const SingleCardRender = function(props) {
    return (
        <div className='card'>
            <img id='card-image' src={props.img} alt='card-image'/>

            <p id='card-location'>{props.location}</p>
            <a id='google-maps-link'>View on Google Maps</a>
            <p id='card-title'>{props.title}</p>
            <p id='card-dates'>{props.startDate} - {props.endDate}</p>
            <p id='card-description'>{props.description}</p>
        </div>
    )
}

