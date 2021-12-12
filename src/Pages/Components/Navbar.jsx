import React from 'react'
import {Link} from 'react-router-dom'

import './A.scss'
import logo from '../../Data/Images/LogoTransparent.png'

const Navbar = () => {
    return (
        <div className="container">
            <div className="itemWrapper">
                <div className="itemWrap">
                    <Link to="/menu" style={{ textDecoration: 'none' }} >
                        <div className="item">Menu</div>
                    </Link>
                </div>
                <div className="itemWrap">
                    <a href="https://www.doordash.com/store/cali-cafe-riverview-1776241/" target="_blank" rel="noreferrer" style={{ 
                            color: 'white' }}>
                        <div className="item">Order Online</div>
                    </a>
                </div>
                <span className="image">
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <img id="logo" src={logo} alt="Cali Logo" />
                    </Link>
                </span>
                <div className="itemWrap">
                    <Link to="/about" style={{ textDecoration: 'none' }} >
                        <div className="item">About Us</div>
                    </Link>
                </div>
                <div className="itemWrap">
                    <Link to="/contact" style={{ textDecoration: 'none' }} >
                        <div className="item">Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
