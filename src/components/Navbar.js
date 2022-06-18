import React from 'react';
import '../index.css'
import worldLogo from '../images/worldLogo.png'; // this is how you add images in src to components



export const Navbar = function() {
    return (
        <div className='navbar'>
            <img id='logo' src={worldLogo}/>

            <h2 id='website-name'>my travel journal.</h2>
        </div>
    )
}