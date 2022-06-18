import React from 'react';
import '../index.css'
import mapMarker from '../images/mapMarker.png'


export const SingleCardRender = function(props) {
    return (
        <div className='card'>
            <img id='card-image' src={props.img} alt='card-image'/>

            <p id='card-title'>{props.title}</p>


            <div className='marker-and-location'>
                <img id='map-marker' src={mapMarker} alt='map marker image'/>
                <p id='card-location'>{props.location}</p>
            </div>

            <a id='google-maps-link' href={props.googleMapsUrl}>View on Google Maps</a>
            <p id='card-dates'>{props.startDate} - {props.endDate}</p>
            <p id='card-description'>{props.description}</p>
        </div>
    )
}

