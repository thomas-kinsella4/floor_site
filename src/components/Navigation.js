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
      <ScrollTo to="bgimg1" spy={true} smooth={true} offset={0} duration={500}><li className='navbar-link-item'>HOME</li></ScrollTo>
      <p className='brand-title'>Wally Floors</p>
    </div>
  )
}

export default Navigation