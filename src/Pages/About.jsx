import React from 'react'

import './About.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="bottomLine">
                <div className="baseLine"></div>
            </div>
            <Footer />
        </div>
    )
}

export default About
