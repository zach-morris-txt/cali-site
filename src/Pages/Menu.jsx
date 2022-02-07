import React from 'react'

import './Menu.css'
import {drinkItems} from '../Data/Menu/MenuData'
import {beanItems} from '../Data/Menu/MenuData'
import {foodItems} from '../Data/Menu/MenuData'
import {pastryItems} from '../Data/Menu/MenuData'
import {cakeItems} from '../Data/Menu/MenuData'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const Menu = () => {
    return (
        <div>
            <Navbar />
            <div className="menuContainer">
                <div className="topSection">
                    <div className="drinkColumn">
                        <div className="menuTitleWrap">
                            <div className="menuTitle">Beverage</div>
                        </div>
                        {drinkItems?.map((item) => (
                            <div className="drinkItem" key={item.id} >
                                <div className="menuItem" key={item.id}>
                                    <img className="menuItemFlag" src={item.img} key={item.id} alt="Background Item" />
                                    { (item.img2) ?
                                    <div className="menuItemOverflow" key={item.id}>
                                        <img className="menuItemIMG" src={item.img2} loading="lazy" key={item.id} alt="Background Item" />
                                    </div>
                                    : <></>}  
                                </div>
                                <div className="itemTexts" key={item.id}>
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p className="itemTextsParagraphs" key={item.id}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="beanColumn">
                            {beanItems?.map((item) => (
                                <div className="drinkItem" key={item.id} >
                                    <div className="menuItem" key={item.id}>
                                        <img className="menuItemFlag" src={item.img} key={item.id} alt="Background Item" />
                                        { (item.img2) ?
                                        <div className="menuItemOverflow" key={item.id}>
                                            <img className="menuItemIMG" src={item.img2} key={item.id} alt="Background Item" />
                                        </div>
                                        : <></>}                                 
                                    </div>
                                    <div className="itemTexts" key={item.id}>
                                        <h4 key={item.id}>{item.name}</h4>
                                        <p className="itemTextsParagraphs" key={item.id}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="foodColumn">
                        <div className="menuTitleWrap">
                            <div className="menuTitle">Cuisine</div>
                        </div>
                        {foodItems?.map((item) => (
                            <div className="foodItem" key={item.id} >
                                    <div className="menuItem" key={item.id}>
                                        <img className="menuItemFlag" src={item.img} key={item.id} alt="Background Item" />
                                        { (item.img2) ?
                                        <div className="menuItemOverflow" key={item.id}>
                                            <img className="menuItemIMG" src={item.img2} key={item.id} alt="Background Item" />
                                        </div>
                                        : <></>}                                
                                    </div>                            
                                <div className="itemTexts" key={item.id}>
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p className="itemTextsParagraphs" key={item.id}>{item.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                <div className="middleSection">
                    <div className="menuTitleWrap">
                        <div className="menuTitle">Bread/Pastry</div>
                    </div>
                    <div className="pastryColumn">
                        {pastryItems?.map((item) => (
                            <div className="pastryItem" key={item.id} >
                                    <div className="menuItem" key={item.id}>
                                        <img className="menuItemFlag" src={item.img} key={item.id} alt="Background Item" />
                                        { (item.img2) ?
                                        <div className="menuItemOverflow" key={item.id}>
                                            <img className="menuItemIMG" src={item.img2} key={item.id} alt="Background Item" />
                                        </div>
                                        : <></>}                            
                                    </div>                            
                                <div className="itemTexts" key={item.id}>
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p className="itemTextsParagraphs" key={item.id}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="menuTitleWrap">
                    <div className="menuTitle">Cake</div>
                </div>
                <div className="cakeSubtitle">            
                    <p>*Cake Orders Available Upon Request</p>
                </div>
                <div className="bottomSection">
                    <div className="cakeColumn">
                        {cakeItems?.map((item) => (
                            <div className="cakeItem" key={item.id} >
                                    <div className="menuItem" key={item.id}>
                                        <img className="menuItemFlag" src={item.img} key={item.id} alt="Background Item" />
                                        { (item.img2) ?
                                        <div className="menuItemOverflow" key={item.id}>
                                            <img className="menuItemIMG" src={item.img2} key={item.id} alt="Background Item" />
                                        </div>
                                        : <></>}                            
                                    </div>                            
                                <div className="itemTexts" key={item.id}>
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p className="itemTextsParagraphs" key={item.id}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bottomLine">
                    <div className="baseLine"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu
