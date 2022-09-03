import React, { useState } from 'react';
import './navbar.css'

export const Navbar = () => {

  const [menubarstate, setmenubarstate] = useState(false)

  const menutoggler = menubarstate ? 'active' : '';

  return (
    <div id='navbar'>
      <div id='logo'>
        <img src='https://images.squarespace-cdn.com/content/v1/59364d66ebbd1a96fde735c3/1568631726434-4TTZXMLVTJNYN7R17HH8/TRANSPARENT+iitd+logo.png' alt="" id="logoimg" height='65px' />
        <div id="logotext">
          <h1 id='logotextabove'>IITD</h1>
          <h5 id='logotextbelow'>Indian Institute of Technology</h5>
        </div>
      </div>

      <div id="menu">
        <ul className={`menulist ${menutoggler}`}>
          <li className='menulistitem itemhome'>
            <a className='navbarlink1' href='#home'>Home</a>
          </li>
          <li className='menulistitem'>
            <a className='navbarlink' href='#aboutus'>About Us</a>
          </li>
          <li className='menulistitem'>
            <a className='navbarlink' href='#news'>Events</a>
          </li>
          <li className='menulistitem'>
            <a className='navbarlink' href='#contactus'>Contact Us</a>
          </li>
        </ul>
        <button id='menulogin'>LOGIN</button>
        <div className='menutoggle' onClick={() => setmenubarstate(!menubarstate)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </div>
  )
}
