import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYelp } from '@fortawesome/free-brands-svg-icons'



const Container = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
margin-top: 1px;
padding: 20px 0px 5px 0px;
background: brown;
`
const FooterItem = styled.div`
align-items: center;
margin: 0px 30px 0px 30px;
`
const FootTitle = styled.div`
margin: 0px 80px 0px 80px;
font-size: 20px;
font-weight: 700;
text-align: center;
text-decoration: underline chocolate;
color: white;
`
const FootSubject = styled.div`
font-size: 16px;
font-weight: 400;
text-align: center;
color: white;
`
const FooterSocial = styled.div`
display: flex;
justify-content: center;
`
const SocialIcon = styled.div`
display: flex; 
align-items: center;
justify-content: center;
margin: 5px 18px 6px 18px; 
width: 40px;
height: 40px;
border-radius: 50%;
background: #${props=> props.color};
color: white;
`


const Footer = () => {
    return (
        <Container>
            <FooterItem>
                <FootTitle>Address</FootTitle>
                <a href="https://www.google.com.mx/maps/place/Cali+Cafe/@27.8544939,-82.3278814,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2d19387c88ee9:0x61920b809cde6c36!8m2!3d27.8544892!4d-82.3256927"
                            target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", width: "275px", height: "50px", borderRadius: "50%", color: 'white' }}>
                <FootSubject>10010 US Highway 301 South<br/>Riverview, FL 33578</FootSubject>
                </a>
            </FooterItem>
            <FooterItem>
                <FootTitle>Join The Cali Community</FootTitle>
                <FooterSocial>
                    <SocialIcon color="3b5999" >
                    <a href="https://www.facebook.com/ricocalicafelife/" target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", color: 'white' }}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="e4405f" >
                    <a href="https://www.instagram.com/ricocalicafe/?hl=en" target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", color: 'white' }}>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="0099CC" >
                    <a href="https://www.yelp.com/biz/cali-cafe-riverview" target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", color: 'white' }}>
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                    </SocialIcon>
                </FooterSocial>
            </FooterItem>
            <FooterItem>
                <FootTitle>Contact</FootTitle>
                <a href="mailto:ricocalicafe@gmail.com" target="_blank" rel="noreferrer" style={{ 
                            display: "flex", alignItems: "center", justifyContent: "center", width: "250px", height: "35px", borderRadius: "50%", color: 'white' }}>
                <FootSubject>ricocalicafe@gmail.com</FootSubject>
                </a>
                <FootSubject>(813) 871-0791</FootSubject>
            </FooterItem>
        </Container>
    )
}

export default Footer
