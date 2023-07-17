import React from 'react';
import logo from './img/logo1.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt='logo1' />
}

export default Header;
