import React, { useState } from 'react';
import '../Hospitality.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Beddings = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsExpanded(false);
    };

    const handleExpandClick = () => {
        setIsExpanded(true);
    };

    const handleCloseClick = () => {
        setSelectedImage(null);
        setIsExpanded(false);
    };

    const handleNextImage = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const handlePrevImage = () => {
        const currentIndex =images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <div>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="grid-box" onClick={() => handleImageClick(image)}>
                        <img key={index} src={image} alt={`Image ${index + 1}`}  />
                        <span className='view-link'>Click to view</span>
                    </div>
                ))}
            </div>
             {selectedImage && (
                <div className="modal-overlay" onClick={handleCloseClick}>
                    <div className={`modal-content ${isExpanded ? 'expanded' : ''}`} onClick={e => e.stopPropagation()}>
                        <button className="nav-button prev-button" onClick={handlePrevImage}><FaChevronLeft /></button>
                        <img src={selectedImage} alt="Selected" onClick={handleExpandClick} />
                        <button className="nav-button next-button" onClick={handleNextImage}><FaChevronRight /></button>
                        <button className="close-button" onClick={handleCloseClick}><MdClose /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Beddings;
