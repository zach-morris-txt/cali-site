import React from 'react'

import './Menu.css'
import {drinkItems} from '../Data/MenuData'
import {beanItems} from '../Data/MenuData'
import {foodItems} from '../Data/MenuData'
import {pastryItems} from '../Data/MenuData'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const Menu = () => {
    return (
        <div>
            <Navbar />
            <div className="menuTitleWrap">
                <h2 className="menuTitle">Beverage</h2>
                <h2 className="menuTitle">Cuisine</h2>
            </div>
            <div className="topSection">
                <div className="drinkColumn">
                    {drinkItems?.map((item) => (
                        <div className="drinkItem" key={item.id} >
                            <img className="menuItemIMG" src={item.img} key={item.id} alt="Background Item" />
                            <div className="itemTexts" key={item.id}>
                                <h4 key={item.id}>{item.name}</h4>
                                <p key={item.id}>{item.description}</p>
                                <p key={item.id}>{item.description2}</p>
                                <p key={item.id}>{item.description3}</p>
                            </div>
                        </div>
                    ))}
                    <div className="beanColumn">
                        {beanItems?.map((item) => (
                            <div className="drinkItem" key={item.id} >
                                <img className="menuItemIMG" src={item.img} key={item.id} alt="Background Item" />
                                <div className="itemTexts" key={item.id}>
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p key={item.id}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="foodColumn">
                    {foodItems?.map((item) => (
                        <div className="foodItem" key={item.id} >
                            <img className="menuItemIMG" src={item.img} key={item.id} alt="Background Item" />
                            <div className="itemTexts" key={item.id}>
                                <h4 key={item.id}>{item.name}</h4>
                                <p key={item.id}>{item.description}</p>
                                <p key={item.id}>{item.description2}</p>
                                <p key={item.id}>{item.description3}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className="menuTitleWrap">
                <h2 className="menuTitle">Bread/Pastry</h2>
            </div>
            <div className="bottomSection">
                <div className="pastryColumn">
                    {pastryItems?.map((item) => (
                        <div className="pastryItem" key={item.id} >
                            <img className="menuItemIMG" src={item.img} key={item.id} alt="Background Item" />
                            <div className="itemTexts" key={item.id}>
                                <h4 key={item.id}>{item.name}</h4>
                                <p key={item.id} className="" >{item.description}</p>
                                <h5 key={item.id} className="" >{item.description2}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottomLine">
                <div className="baseLine"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu
