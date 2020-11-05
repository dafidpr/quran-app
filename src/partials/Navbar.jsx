import React from 'react';
import Logo from '../assets/img/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm p-3 navbar-light bg-white">
            <div className="container">
                <div className="navbar-brand mx-auto" >
                    <img src={Logo} width="40" alt="Al-Quran App Logo"/>
                    <strong>Al - Quran</strong>
                </div>
             </div>
         </nav>
    )
}

export default Navbar
