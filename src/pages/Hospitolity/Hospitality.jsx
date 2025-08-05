import React, { useRef, useState } from 'react';
import './Hospitality.css';
import Beddings from './Components/Beddings';
import { beddings, ceramics, cutlery, furniturs, glasswares, linens } from '../../components/ImageStore/ImageStore';
import ContactCard from '../Home/component/ContactCard';
import { FiChevronRight } from 'react-icons/fi';
import bed from '../../assets/hos1.jpg';
import cutle from '../../assets/cutlery_51.jpg';
import cera from '../../assets/page_01.jpg';
import glass from '../../assets/glassware_04.jpg';
import line from '../../assets/linen_15.jpg';
import furni from '../../assets/furniture_17.jpg'
import { BsArrowLeftCircle } from 'react-icons/bs';
import F3 from '../../components/Footer/Footer';
import OverlayFooter from '../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../components/navbar/NavbarTest';

const Hospitolity = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const infoDataRef = useRef(null);

    const handleClick = (index) => {
        setCurrentIndex(index);
        const element = infoDataRef.current;
        const topPosition = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    };
    const handleBack = () => {
        setCurrentIndex(null);
    };

    const list = [
        { title: 'Beddings', element: <Beddings images={beddings} i='1' /> },
        { title: 'Cutlery', element: <Beddings images={cutlery} i='2' /> },
        { title: 'Ceramics', element: <Beddings images={ceramics} i='3' /> },
        { title: 'Glassware', element: <Beddings images={glasswares} i='4' /> },
        { title: 'Linen', element: <Beddings images={linens} i='5' /> },
        { title: 'Furniture', element: <Beddings images={furniturs} i='6' /> }
    ];

    return (
        <div>
            <div className='contact-nav'>
                <NavbarTest />
            </div>
            <div className="hospitality">
                <div className="hospitality-container">
                    <div className="title-list">
                        {list.map((item, index) => (
                            <h3
                                key={index}
                                onClick={() => handleClick(index)}
                                className={currentIndex === index ? 'active' : ''}
                            >
                                {item.title}
                                <FiChevronRight />
                            </h3>
                        ))}
                        <BsArrowLeftCircle
                            onClick={handleBack}
                            className={currentIndex !== null ? 'hospitolity-home-btn' : 'hospitolity-home-btn-inactive'}
                        />
                    </div>
                    <div ref={infoDataRef} className="content-list">
                        {currentIndex !== null ? (
                            <div>
                                {list[currentIndex].element}
                            </div>
                        )
                            :
                            (
                                <div className='mini-container-hospitality'>
                                    <div className='intro-hospitality'>
                                        <h1>Trade Syndicate Your Trusted Partner for Premium Hotel Accessories</h1>
                                        <p>Trade Syndicate is a leading supplier of high-quality hotel accessories. We offer a wide range of products including ceramics, cutlery, bedding, glassware, linen, and furniture, sourced from top manufacturers globally. Our commitment to excellent service ensures timely delivery at competitive prices, with the highest standards of quality.</p>
                                    </div>
                                    <div className='hospitality-breif'>
                                        <div className='breif1' onClick={() =>handleClick(0)}>
                                            <img src={bed} alt="" />
                                            <h3
                                            >{list[0].title}</h3>
                                        </div>
                                        <div className='breif1' onClick={() =>handleClick(1)}>
                                            <img src={cutle} alt="" />
                                            <h3>{list[1].title}</h3>
                                        </div>
                                        <div className='breif1' onClick={() =>handleClick(2)}>
                                            <img src={cera} alt="" />
                                            <h3>{list[2].title}</h3>
                                        </div>
                                        <div className='breif1' onClick={() =>handleClick(3)}>
                                            <img src={glass} alt="" />
                                            <h3>{list[3].title}</h3>
                                        </div>
                                        <div className='breif1' onClick={() =>handleClick(4)}>
                                            <img src={line} alt="" />
                                            <h3>{list[4].title}</h3>
                                        </div>
                                        <div className='breif1' onClick={() =>handleClick(5)}>
                                            <img src={furni} alt="" />
                                            <h3>{list[5].title}</h3>
                                        </div>
                                    </div>
                                    <div className='quality'>
                                        <h2>Quality Assurance</h2>
                                        <p>At Trade Syndicate, we only supply products from trusted manufacturers that adhere to rigorous quality standards. Every item we offer undergoes thorough inspections before reaching you, ensuring reliability and durability.</p>
                                    </div>
                                    <div className='quality'>
                                        <h2>Our Experienced Team</h2>
                                        <p>Our dedicated team of professionals works tirelessly to meet the specific needs of each client. With years of industry experience, we ensure seamless procurement, fast delivery, and exceptional customer service.</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <div className='contact-card-box'><ContactCard /></div>
            <div className="hospitality-footer">
            <F3/>
            </div>
            <OverlayFooter />
        </div>
    );
}

export default Hospitolity;
