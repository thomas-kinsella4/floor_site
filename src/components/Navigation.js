import React, { useState } from 'react'
import {Link as ScrollTo} from 'react-scroll';

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 65) {
          setNavbar(true);
        }
        else{
          setNavbar(false);
        }
      };

      window.addEventListener('scroll', changeBackground)

  return (
    <div class={navbar ? 'topnav active' : 'topnav'} id="myTopnav">
        <p className='brand-title'>Wally Floors</p>
        <ScrollTo to="bgimg1" spy={true} smooth={true} offset={0} duration={500}><li className='navbar-link-item'>HOME</li></ScrollTo>
        <ScrollTo to="services-section" spy={true} smooth={true} offset={0} duration={500}><li className='navbar-link-item'>SERVICES</li></ScrollTo>
        <ScrollTo to="reviews-section" spy={true} smooth={true} offset={0} duration={500}><li className='navbar-link-item'>GALLERY</li></ScrollTo>
        <ScrollTo to="contact-section" spy={true} smooth={true} offset={0} duration={500}><li className='navbar-link-item'>CONTACT</li></ScrollTo>
    </div>
  )
}

export default Navigation