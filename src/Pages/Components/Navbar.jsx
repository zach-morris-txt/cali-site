import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
import logo from '../../Data/Images/LogoTransparent.png'


const Navbar = () => {
    return (
        <div className="container">
            <div className="itemWrapper">
                <div className="itemWrap">
                    <Link to="/menu" style={{ textDecoration: 'none', width: "100%", height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <div className="item">Menu</div>
                    </Link>
                </div>
                <div className="itemWrap">
                    <a href="https://www.doordash.com/store/cali-cafe-riverview-1776241/" target="_blank" rel="noreferrer" style={{ 
                            textDecoration: "none", color: 'white', width: "100%", height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"  }}>
                        <div className="item">Order<br/>Online</div>
                    </a>
                </div>
                <div className="logoWrap">
                    <span className="logo">
                        <Link to="/" style={{ 
                            textDecoration: 'none', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }} >
                            <img id="caliLogo" src={logo} alt="Cali Logo" />
                        </Link>
                    </span>
                </div>
                <div className="itemWrap">
                    <Link to="/about" style={{ textDecoration: 'none', width: "100%", height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <div className="item">About<br/>Us</div>
                    </Link>
                </div>
                <div className="itemWrap">
                    <Link to="/contact" style={{ textDecoration: 'none', width: "100%", height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <div className="item">Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
