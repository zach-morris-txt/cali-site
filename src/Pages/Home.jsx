import React from 'react'

import Navbar from './Components/Navbar'
import HomeScroll from './Components/HomeScroll'
import Footer from './Components/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeScroll loading="lazy"/>
            <Footer />
        </div>
    )
}

export default Home
