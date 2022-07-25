import React from 'react'
 import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    return (
       <div className="header">
        <nav className='navbar'>
            <a href='/' className='logo'>

            </a>
            <div className='fa-bars'>

            </div>
            <ul className='nav-menu'>
              <li className='nav-item'>
                  <a href='/'>Home</a>
              </li>
              <li className='nav-item'>
                  <a href='/'>Gallery</a>
              </li>
              <li className='nav-item'>
                  <a href='/'>Tematic Articles</a>
              </li>
              <li className='nav-item'>
                  <a href='/'>Contacts</a>
              </li>
              <li className='nav-item'>
                  <a href='/'>About</a>
              </li>
            </ul>
        </nav>
       </div>
    )
}

export default Navbar;