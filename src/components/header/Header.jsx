import React, {useState} from 'react';
import './header.css';
import Navbar from '../navbar/Navbar';
import "swiper/css";
import "swiper/css/pagination";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Header = () => {

    const [dots, setDots] = useState(['01', '02', '03'])
    const [bannerSlides, setBannerSlides] = useState([
        {
            id: 1,
            title: 'WHERE GREAT IDEAS COME TO LIFE',
            body: 'Passionate creative studio helping startups grow their business!',
        },
        {
            id: 2,
            title: 'Creative Agency',
            body: 'Minimal Freelance Portfolio',
        },
        {
            id: 3,
            title: 'Lian Creative Agency',
            body: 'Startups grow their business!',
        },
    ])

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <header>

            <Navbar />

            <div className="slider">

                    {bannerSlides.map((slide, index) =>

                            <div
                                className={activeIndex === index ? "slide active" : "slide"}
                                style={{backgroundImage: `url('../img/main-${slide.id}.jpg')`}}
                            >
                                <h1>{slide.title}</h1>
                                <p className="header-text">{slide.body}</p>
                            </div>

                    )}


                <div className="dots-wrapper">
                    {dots.map((dot, index) =>
                            <span
                                className={activeIndex === index ? "dot active" : "dot"}
                                onClick={() => setActiveIndex(index)}
                            >
                        {dot}
                    </span>
                    )}
                </div>

            </div>


        </header>
    );
};

export default Header;