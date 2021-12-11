import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



const Container = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
margin-top: 1px;
padding-top: 15px;
background: brown;
`
const FooterItem = styled.div`
align-items: center;
margin: 0px 30px 0px 30px;
`
const FootTitle = styled.div`
margin: 0px 80px 0px 80px;
font-size: 20px;
color: white;
text-align: center;
`
const FootSubject = styled.div`
font-size: 16px;
font-weight: 500;
text-align: center;
`
const FooterSocial = styled.div`
display: flex;
justify-content:center;
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
                <FootSubject>10010 US Highway 301 South<br/>Riverview, FL 33578</FootSubject>
            </FooterItem>
            <FooterItem>
                <FootTitle>Join The Cali Community</FootTitle>
                <FooterSocial>
                    <SocialIcon color="3b5999" >
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </SocialIcon>
                    <SocialIcon color="e4405f" >
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </SocialIcon>
                    <SocialIcon color="55acee" >
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </SocialIcon>
                </FooterSocial>
            </FooterItem>
            <FooterItem>
                <FootTitle>Contact</FootTitle>
                <FootSubject>Ricocalicafe@gmail.com</FootSubject>
                <FootSubject>(813) 871-0791</FootSubject>
            </FooterItem>
        </Container>
    )
}

export default Footer
