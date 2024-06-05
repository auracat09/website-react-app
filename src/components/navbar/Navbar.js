import React, {useState} from 'react'

import { IoMenu } from "react-icons/io5";

import { AiOutlineClose } from 'react-icons/ai';


import './NavbarStyles.css'

function Navbar() {
    const[nav, setNav]=useState(false)
    const handleNav = () => setNav (!nav)

    
  return (
    <div className={nav ? 'navbar navbar-bg':'navbar'}>
        <div className={ nav ? 'logo dark': 'logo'}>
            <h2>Sport Consultancy.</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Product</li>
            <li>Solutions</li>
            <li>Clients</li>
            <li>Contact</li>
            <div className="nav-menu-bottom">
                <div className="menu-icons">
                <button>Get a Quote</button>
                </div>
            </div>
        </ul>
        <div className="nav-icons">
           
          
        </div>
        <div className="hamburger" onClick={handleNav}>
            {!nav ? (<IoMenu className='icon'/>): (<AiOutlineClose style={{color:'#000'}} className='icon'/>)}
            
        </div>
        <div className={nav ? 'mobile-menu active': 'mobile-menu'}>
            <ul className="modile-nav">
            <li>Home</li>
            <li>Product</li>
            <li>Solutions</li>
            <li>Clients</li>
            <li>Contact</li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="menu-icons">
                <button>Get a Quote</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar