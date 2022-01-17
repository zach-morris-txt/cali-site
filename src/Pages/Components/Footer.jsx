import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYelp } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'


const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerItem">
                <div className="footTitle">Address</div>
                <a href="https://www.google.com.mx/maps/place/Cali+Cafe/@27.8544939,-82.3278814,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2d19387c88ee9:0x61920b809cde6c36!8m2!3d27.8544892!4d-82.3256927"
                            target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", color: 'white' }}>
                <div className="footSubject">10010 US Highway 301 South<br/>Riverview, FL 33578</div>
                </a>
            </div>
            <div className="footerItem">
                <div className="footTitle">Join The Cali Community</div>
                <div className="footSocial">
                    <div className="socialIcon">
                        <a href="https://www.facebook.com/ricocalicafelife/" className="socialIconLink" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} className="faIcon" />
                        </a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://www.instagram.com/ricocalicafe/?hl=en" className="socialIconLink" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagramSquare} className="inIcon" />
                        </a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://www.yelp.com/biz/cali-cafe-riverview" className="socialIconLink" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYelp} className="yeIcon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footerItem">
                <div className="footTitle">Contact</div>
                <a href="mailto:ricocalicafe@gmail.com" target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", color: 'white' }}>
                <div className="footSubject">ricocalicafe@gmail.com</div>
                </a>
                <div className="footSubject">(813) 871-0791</div>
            </div>
        </div>
    )
}

export default Footer
