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
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const [list, setList] = useState(scrollTestimonials);
    const [id, setId] = useState(0)
    const delay = 10000;

    useEffect(() => {
        setList(shuffleArray([...scrollTestimonials]));
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
                        <img className="slide" src={item.img} key={item.id} alt="Slide" />
                    ))}
                    <div className="wrapperTest">
                        <div className="sliderTest">
                            <div className="slidesTest">
                                {list?.map((item) => (
                                    <div className="slideWrapper" key={item.id} >
                                        <div className="slideContent" key={item.id} >
                                            <div className="testimoneyWrapper" key={item.id} >
                                                <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="white" key={item.id} />
                                                <p className="slideTestimoney" key={item.id}>{item.text}</p>
                                                <FontAwesomeIcon icon={faQuoteRight} size="2x" color="white" key={item.id} />
                                            </div>
                                            <div className="slideInfos" key={item.id} >
                                                <p className="slideName" key={item.id}>{item.name}</p>
                                                <div className="slideInfo" key={item.id}>
                                                    {item.site === "Yelp" ? 
                                                        <>
                                                            <FontAwesomeIcon icon={faYelp} size="2x" color="#0099CC" key={item.id} />
                                                            <p className="slideInfo1" key={item.id}>Yelp</p>
                                                        </>
                                                    :
                                                        <>
                                                            <FontAwesomeIcon icon={faGoogle} size="2x" color="#EA4335" key={item.id} />
                                                            <p className="slideInfo2" key={item.id}>oogle</p>
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
