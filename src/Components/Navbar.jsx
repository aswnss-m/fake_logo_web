import React from 'react'
import logo from "../assets/logo_typo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navContainer">
        <div className="navbar">
          <div className="navLogo">
              <Link to={'/'}><img src={logo} alt="Fake Logo Search"  /></Link>
              <Link>API</Link>
          </div>
          <div className="navLinks bold">
            <Link to={'/'}>HOME</Link>
            <Link to={'/'}>ABOUT</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
