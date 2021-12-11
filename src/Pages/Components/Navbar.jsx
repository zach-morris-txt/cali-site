import React from 'react'
import {Link} from 'react-router-dom'

import './A.scss'
import logo from '../../Data/Images/LogoTransparent.png'


const Navbar = () => {
    return (
        <div class="container">
            <div class="itemWrapper">
                <div class="itemWrap">
                    <Link to="/menu" style={{ textDecoration: 'none' }} >
                        <div class="item">Menu</div>
                    </Link>
                </div>
                <div class="itemWrap">
                    <Link to="/orderDoorDash" style={{ textDecoration: 'none' }} >
                        <div class="item">Order Online</div>
                    </Link>
                </div>
                <span class="image">
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <img id="logo" src={logo} alt="Cali Logo" />
                    </Link>
                </span>
                <div class="itemWrap">
                    <Link to="/about" style={{ textDecoration: 'none' }} >
                        <div class="item">About Us</div>
                    </Link>
                </div>
                <div className="itemWrap">
                    <Link to="/contact" style={{ textDecoration: 'none' }} >
                        <div class="item">Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
