import React, { useEffect, useRef, useState } from 'react';
import './Tiles.css';

import Img1 from '../../assets/slide (4).jpg'
import Img2 from '../../assets/slide (15).jpg';
import Img3 from '../../assets/slide (1).jpg'
import Img4 from '../../assets/slide (2).jpg'
import Img5 from '../../assets/slide (12).jpg'
import Img6 from '../../assets/slide (11).jpg'
import Img7 from '../../assets/slide (3).jpg'
import Img8 from '../../assets/Application.jpg';
import Img9 from '../../assets/slide (6).jpg'
import Img10 from '../../assets/slide (8).jpg'
import Img11 from '../../assets/slide (7).jpg'
import Img12 from '../../assets/slide (13).jpg';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';



const Slider = () => {
    const images = [
        {
            src: Img1,
            title: "Glossy Tile Collection",
            description: "Glossy tiles combine luxury, durability, and timeless style — perfect for modern homes, elegant offices, or upscale resorts.",
            link: 'https://drive.google.com/file/d/11oanf1Q5ND6yB4376QhgUpWaZwlrkBQ4/view?usp=drive_link',
            url: "/tiles/glossy-tile"
        },
        {
            src: Img2,
            title: "Double Charge",
            description: "Double Charge vitrified tiles offer lasting durability with effortless luxury — ideal for homes, hotels, offices, and showrooms.",
            link: 'https://drive.google.com/file/d/1nCHsT_ZPWMpQOWCGfm9IxjvWBiq0Erje/view?usp=drive_link',
            url: "/tiles/double-charge"
        },
        {
            src: Img3,
            title: "Glossy Endless Collection",
            description: "Trade Syndicate tiles bring seamless elegance and scale to interiors — favored by architects and featured in luxury resorts, they turn every space into timeless art.",
            link: 'https://drive.google.com/file/d/1VomCJvgdqk_AJD9d1lx3DDxtXTVmCQvi/view?usp=drive_link',
            url: "/tiles/glossy-endless"
        },
        {
            src: Img4,
            title: "Carvoss Collection",
            description: "Loved by designers, found in celebrity homes and boutique hotels — these tiles turn every space into a statement of luxury and art.",
            link: 'https://drive.google.com/file/d/1-5VClZrI2OQ_341vf6WIYjQOmtA-FuJi/view?usp=drive_link',
            url: "/tiles/carvoss-collection"
        },
        {
            src: Img5,
            title: "Colorplay Collection",
            description: "Inspired by modern art and enhanced with Colortech Technology, these tiles offer vibrant style, lasting strength, and timeless appeal.",
            link: 'https://drive.google.com/file/d/12OFUZz9bVsreoILBYlhlVQh-fRLmu2gN/view?usp=drive_link',
            url: "/tiles/colorplay"
        },
        {
            src: Img6,
            title: "Embossed Collection",
            description: "The Embossed Collection blends heritage and modern design, with rich textures and intricate, artisan-inspired details.",
            link: 'https://drive.google.com/file/d/1K0vZm2TiuksX37Dw3eVyN9ImdtrsikDD/view?usp=drive_link',
            url: "/tiles/embossed"
        },
        {
            src: Img7,
            title: "Glazed Vitrified Tiles Carving & Endless",
            description: "Where bold veins meet seamless design — the GVT Carving & Endless Collection embodies luxury in celebrity homes and five-star spaces.",
            link: 'https://drive.google.com/file/d/1-kqiaGtHQYSJIJkvq1f8ZMOGK0TlYCuk/view?usp=drive_link',
            url: "/tiles/gvt-carving"
        },
        {
            src: Img8,
            title: "Glazed Vitrified Tiles.",
            description: "The GVT Glossy Collection blends timeless elegance with modern design, reflecting nature’s beauty through brilliant, sophisticated surfaces.",
            link: 'https://drive.google.com/file/d/18vjY9WDZb7an2sgEAE-p-Tvxfn_X15dJ/view?usp=drive_link',
            url: "/tiles/gvt-glossy"
        },
        {
            src: Img9,
            title: "Highglass Collection",
            description: "Graceful patterns and a mirror-like sheen make these tiles a showstopper — perfect for resort lobbies and modern Indian homes.",
            link: 'https://drive.google.com/file/d/1fOfY88If9E0BNjB9wOXsjRX8C33jNhSO/view?usp=drive_link',
            url: "/tiles/highgloss"
        },
        {
            src: Img10,
            title: "Lignea Collection",
            description: "From boutique resorts to modern homes, Lignea creates serene wooden spaces with the strength of vitrified tiles.",
            link: 'https://drive.google.com/file/d/1MGlEFs8TvlpcQ7XyohbnWTTPRVmPQVMa/view?usp=drive_link',
            url: "/tiles/lignea"
        },
        {
            src: Img11,
            title: "Mystic Shades",
            description: "Mystic Dark Glossy blends fluid patterns with rich depth and luxury — ideal for elegant homes, hotels, and creative spaces.",
            link: 'https://drive.google.com/file/d/1TZ2kvI9wBtg5m29nPvqkZvSE1d1wU4By/view?usp=drive_link',
            url: "/tiles/mystic"
        },
        {
            src: Img12,
            title: "Statuario Series",
            description: "The Statuario Series channels timeless marble luxury — with flowing veins and radiant gloss, it brings calm elegance to homes, hotels, and designer spaces.",
            link: 'https://drive.google.com/file/d/111IPcjwJrjctBHZyrIasR-_8-hVuCMF1/view?usp=drive_link',
            url: "/tiles/statuario"
        },
    ]

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(null);
    const intervalRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    const nextSlide = () => {
        setDirection('right');
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const pauseAutoSlide = () => {
        stopAutoSlide();
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            nextSlide();
            startAutoSlide();
        }, 3000);
    };

    const handleNavClick = (fn) => {
        pauseAutoSlide();
        fn();
    };

    useEffect(() => {
        if (!images || images.length === 0) return;

        startAutoSlide();

        return () => {
            stopAutoSlide();
            clearTimeout(resumeTimeoutRef.current);
        };
    }, [images]);

    return (
        <div>
            <div className="tile-slider">
                <button className="nav-btn left" onClick={() => handleNavClick(prevSlide)}>
                    <FaAngleLeft />
                </button>
                <div
                    key={`${current}-${direction}`}
                    className={`slide ${direction === 'left' ? 'left' : ''} ${direction === 'right' ? 'right' : ''}`}
                >
                    <img src={images[current].src} alt={images[current].title} />
                    <div className='slide-info'>
                        <h1>{images[current].title}</h1>
                        <p>{images[current].description}</p>
                        <div className='slide-links'>
                            <a href={images[current].link} target="_blank" rel="noopener noreferrer">
                                View <IoDocumentTextOutline />
                            </a>
                            <Link to={images[current].url}>
                                Got to Page <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="nav-btn right" onClick={() => handleNavClick(nextSlide)}>
                    <FaAngleRight />
                </button>
            </div>
            <div className='tile-intro'>
                <h2>Trade Syndiacte is a passionate pursuit of the tile industry and
                    decor connoisseurs to bring effective, brilliant, and apt solutions to
                    interiors and spaces with exceptional collections of tiles.
                </h2>
            </div>
            <div className='tile-collections'>
                {
                    images.map((item, idx) => (
                        <div key={idx} className='tile-card'>
                            <img src={item.src} alt='' />
                            <div className='card-info'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <IoDocumentTextOutline />
                                    </a>
                                    <Link to={item.url}>
                                        <FaAngleRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Slider;