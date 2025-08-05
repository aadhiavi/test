import React, { useCallback, useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;
    const slideIntervalTime = 4000;

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
                        <div key={index} className="slide-image-box">
                            <img src={item} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;

