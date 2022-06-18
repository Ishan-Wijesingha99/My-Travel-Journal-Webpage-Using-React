import React from 'react';
import '../index.css'
import worldLogo from '../images/worldLogo.png';



export const Navbar = function() {
    return (
        <div className='navbar'>
            <img id='logo' src={worldLogo}/>
        </div>
    )
}