import React from 'react'

import './Contact.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contactWrap">
                <div className="topLine">
                    <div className="line"></div>
                </div>
                <div className="contactWrapper">
                    <div className="contactColumn">
                        <div className="upperWrap">
                            <div className="callColumn">
                                <h2 className="contactTitle">Call Us</h2>
                                <p className="contactInfo">813-871-0791</p>
                            </div>
                            <div className="emailColumn">
                                <h2 className="contactTitle">Email Us</h2>
                                <p className="contactInfo">ricocalicafe @gmail.com</p>
                            </div>
                        </div>
                        <div className="hoursColumn">
                            <h2 className="contactTitle">Hours</h2>
                            <div className="days">
                                <div className="day"><div className="hours"><div className="dayLabel">Mon: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Tue: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Wed: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Thu: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Fri: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Sat: </div>6:30am - 6:30pm</div></div>
                                <div className="day"><div className="hours"><div className="dayLabel">Sun: </div>7am-5pm</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="findColumn">
                        <div className="addressColumn">
                            <h2 className="findTitle">Find Us</h2>
                            <p className="contactInfo">10010 US-301 S, Riverview FL</p>
                        </div>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.545982707966!2d-82.32788138481365!3d27.85449392561663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d19387c88ee9%3A0x61920b809cde6c36!2sCali%20Cafe!5e0!3m2!1sen!2sus!4v1639241645648!5m2!1sen!2sus" 
                                className="googleMap" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
