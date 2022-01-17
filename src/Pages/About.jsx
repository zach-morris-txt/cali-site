import React from 'react'

import about1 from '../Data/Images/About1.jpg'
import about2 from '../Data/Images/About2.jpg'


import './About.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="aboutWrap">
                <div className="aboutTopLine">
                    <div className="aboutLine"></div>
                </div>
                <div className="contentWrap">
                    <div className="aboutText">
                        <p id="aboutIntro">Opened January 9th, 2020 by Claudia Elena Durango</p>
                        <p className="aboutParagraphs" id="startParagraphs">Cali Café is a local, specialty coffee shop which serves the Riverview-Tampa metropolitan area.</p>
                        <p className="aboutParagraphs" id="middleParagraphs">Claudia opened Cali Café to accomodate the growing demand for quick, <span id="italicize">sensibly priced</span> café goods.
                        Accordingly, Cali offers premium Columbian coffee, artisanal breads, sweet snacks, and savory meals — all of which are made fresh on the premises. Perhaps best of all, Cali offers a cozy, familial hospitality.</p>
                        <p className="aboutParagraphs">Our objective is to become a regional leader in 'café experience'. We hope to accomplish this by pleasing our current customers with 
                        our humble efforts as well as by attracting new patrons who are in search of higher quality products/services than those they may find at Dunkin' Donuts and at 
                        more favorable prices than a comparable Starbucks.</p>
                        <p className="aboutParagraphs">To us, the satisfaction and continued favor of our clientele is paramount. Let's grow the
                            <a href="https://www.instagram.com/ricocalicafe/?hl=en" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "chocolate"}}> Cali Community </a> 
                        together.</p>
                    </div>
                    <div className="sectionImages">
                        <img className="aboutImg" src={about1} alt="Background Item" />
                        <img className="aboutImg" src={about2} alt="Background Item" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
