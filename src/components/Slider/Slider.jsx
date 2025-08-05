import React, { useCallback, useEffect, useState } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;
    const slideIntervalTime = 10000;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, slideIntervalTime);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="image-slider">
            <div className="image-slider-container">
                <div
                    className="image-slider-container-box"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((item, index) => (
                        <div key={index} className="slide-box">
                            <img src={item.img} alt={`Slide ${index}`} />
                            <div className="slide-info">
                                <h2>{item.title}</h2>
                                <Link to={item.link}><IoPlayCircleOutline /></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="prev-btn" onClick={prevSlide}><BsChevronCompactLeft /></div>
                <div className="next-btn" onClick={nextSlide}><BsChevronCompactRight /></div>

                {/* Dots as thumbnails */}
                <div className="dot-container">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;

