import React, { useEffect, useState } from 'react'
import image_1 from './../../assests/image_1.jpeg'
import image_2 from './../../assests/image_2.jpeg'
import image_3 from './../../assests/image_3.jpeg'
import image_4 from './../../assests/image_4.jpeg'
import './Hero.css'
import grear from './../../assests/gear.gif'

const images = [
    image_1,
    image_2,
    image_3,
    image_4
]
    

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="hero">
            <div className="slideshow">
                <button className="slideshow-button prev" onClick={prevSlide}>
                    ❮
                </button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slideshow-image" />
                <button className="slideshow-button next" onClick={nextSlide}>
                    ❯
                </button>
            </div>
            <div className="about-us">
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        The principle objective of the Gharda Foundation is "To carry on activities for 
                        the benefits and development of residents of rural India by application of all 
                        suitable means available with focus on issues like health, literacy, non formal
                        education, social awareness, agriculture, technical education etc. on its own 
                        or by joining hands or by helping like minded NGO's ". Establishment of Gharda
                        Institute of Technology in a typical rural sector is also a step in line with 
                        the philosophy of Gharda Foundation.
                    </p>
                    <p>
                        GIT has provided good infrastucture, modern equipments, 
                        advanced laboratories, experienced & dediacated teachers, modified 
                        syllabus to suit changing environment, hands on workshop by collaborating 
                        with foreign universities and arranging for pre-entrance preparatory workshops.
                        All this provided at a reasonable cost may be with arrangement of loan facilities 
                        with subsidized interest rates. Hence the said institute within a couple of years 
                        emerged as a premier institute in the eyes of government & businessmen.
                    </p>
                </div>
                <img src={grear} alt='gear' className='about-us-logo'/>
            </div>
        </div>
        
        
    );
}

export default Hero