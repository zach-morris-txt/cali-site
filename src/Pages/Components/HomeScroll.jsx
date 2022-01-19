import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons'

import './HomeScroll.css'
import './HomeScrollTestimonials.css'
import {scrollImages} from '../../Data/data'
import {scrollTestimonials} from '../../Data/data'



const HomeScroll = () => {
    function shuffleArray(array) {
        var i, j, temp;

        for (i = array.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const [list, setList] = useState([])
    const [id, setId] = useState(0)
    const delay = 10000;

    useEffect(() => {
        const mountArray = shuffleArray([...scrollTestimonials])
        setList(mountArray)
        setTimeout(() =>
            setId((prevIndex) =>
                prevIndex === scrollImages.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        return () => {};
    }, [id]);

    return (
        <div className="wrapper">
            <div className="slider">
                <div className="slides"
                    style={{ transform: `translate3d(${-id * 2.5}%, 0, 0)` }}
                >
                    {scrollImages?.map((item) => (
                        <div className="widthWide" key={item.id}>
                            <img className="slide" src={item.img} alt="Slide" />
                        </div>
                    ))}
                    <div className="wrapperTest">
                        <div className="sliderTest">
                            <div className="slidesTest">
                                {list?.map((x) => (
                                    <div className="slideWrapper" key={x.id + x.name} >
                                        <div className="slideContent" >
                                            <div className="testimoneyWrapper" >
                                                <FontAwesomeIcon icon={faQuoteLeft} className="leftQuote" />
                                                <div className="slideTestimoneyWrapper">
                                                    <p className="slideTestimoney">{x.text}</p>
                                                </div>
                                                <FontAwesomeIcon icon={faQuoteRight} className="rightQuote" />
                                            </div>
                                            <div className="slideInfos" >
                                                <p className="slideName">{x.name}</p>
                                                <div className="slideInfo">
                                                    {x.site === "Yelp" ? 
                                                        <>
                                                            <FontAwesomeIcon icon={faYelp} size="2x" color="#0099CC" />
                                                            <p className="slideInfo1">Yelp</p>
                                                        </>
                                                    :
                                                        <>
                                                            <FontAwesomeIcon icon={faGoogle} size="1x" color="#EA4335" />
                                                            <p className="slideInfo2">oogle</p>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScroll
