import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h3 className='logo'>ICTAK Batch Manager</h3>
      <ul className='nav-links'>
             <Link to="/" className='home'>
              <li>Home</li></Link>
              <Link to="/" className='about'>
              <li>About</li></Link>
              <Link to="/" className='status'>
              <li>Status</li></Link>
              </ul>

        </nav>
  )
}

export default Navbar