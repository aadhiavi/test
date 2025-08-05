import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiExpandAlt } from "react-icons/bi";
import './Gallery.css'
import { newArray } from '../../components/ImageStore/ImageStore';
import OverlayFooter from '../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../components/navbar/NavbarTest';
import F3 from '../../components/Footer/Footer';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const Imagesgallery = newArray
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
        if (!selectedImage) return;
        const currentIndex = Imagesgallery.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % Imagesgallery.length;
        setSelectedImage(Imagesgallery[nextIndex]);
    };

    const handlePrevImage = () => {
        if (!selectedImage) return;
        const currentIndex = Imagesgallery.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + Imagesgallery.length) % Imagesgallery.length;
        setSelectedImage(Imagesgallery[prevIndex]);
    };

    return (
        <>
        <NavbarTest/>
            <div className="images-container">
                {Imagesgallery.map((image, index) => (
                    <div className='grid-image' key={index} onClick={() => handleImageClick(image)}>
                        <img src={image.img} alt={`Slide ${index}`} />
                        <span className='view'><BiExpandAlt /></span>
                    </div>
                ))}

                {selectedImage && (
                    <div className="modal-overlay" >
                        <div className={`modal-content ${isExpanded ? 'expanded' : ''}`} onClick={e => e.stopPropagation()}>
                            <button className="nav-button prev-button" onClick={handlePrevImage}><FaChevronLeft /></button>
                            <img src={selectedImage.img} alt="Selected" onClick={handleExpandClick} />
                            <button className="nav-button next-button" onClick={handleNextImage}><FaChevronRight /></button>
                            <button className="close-button" onClick={handleCloseClick}><MdClose /></button>
                        </div>
                    </div>
                )}
            </div>
            <F3/>
            <OverlayFooter />
        </>
    );
};

export default Gallery;