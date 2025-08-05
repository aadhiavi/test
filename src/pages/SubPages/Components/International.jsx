import React, { useRef } from 'react'
import ie from '../../../assets/ie.jpg';
import '../SubPages.css';
import ImageSlider from '../../../components/Slider/ImageSlider';
import { Imports, Inter } from '../../../components/ImageStore/ImageStore';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const International = () => {
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);

  const handleClick1 = () => {
    targetRef1.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick2 = () => {
    targetRef2.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className='nav-nav'><NavbarTest /></div>
      <div className="group-section">
        <img className='group-section-bg' src={ie} alt="" />
        <div className="group-section-intro">
          <h2>TRADE SYNDICATE INTERNATIONAL PVT. LTD.</h2>
          <p>Our international team is committed to providing you with the best possible support and assistance in your journey to success. We strive to make our services accessible and affordable to all, regardless of your location or language.</p>
        </div>
        <div className="international-btn">
          <button onClick={handleClick1}>EXPORTS</button>
          <button onClick={handleClick2}>IMPORTS</button>
        </div>
      </div>
      <div ref={targetRef1} className="exports">
        <div className="exports-slider">
          <ImageSlider images={Inter} />
        </div>
        <div className="exports-info">
          <h2>Exports</h2>
          <p>Since its establishment, the company has gained a strong reputation in the NUTS, SEEDS, SPICES, and PEANUTS industry, with consistent and reliable growth. Sourcing directly from farmers and maintaining clear communication to ensure the best quality products has been the core focus since 2013, when Mr. Suresh Arun acquired the company. The company now exports a wide range of quality products to multiple international markets...</p>
          <p>In addition to food products like PEANUTS, TURMERIC, and SPICES, the company also exports non-food items such as AIRCRAFT SPARE PARTS, ORGANIC FERTILIZERS, INDUSTRIAL HELMETS, and ELECTRICAL TRANSFORMERS. The demand for these diverse products continues to grow across various regions globally.</p>
        </div>
      </div>

      <div className="exports-gallery-grid">
        {
          Inter.map((item, index) => (
            <div key={index} className="exports-gallery-item">
              <img src={item} alt="item" />
            </div>
          ))
        }
      </div>

      <div ref={targetRef2} className="exports">
        <div className="exports-slider">
          <ImageSlider images={Imports} />
        </div>
        <div className="exports-info">
          <h2>Imports</h2>
          <p>Tradesyndicate was established in the Year 2012 and It has been acquired in 2013 by Mr. Suresh Arun, They both concentrated on brining great furniture, Superb Tents, LED Lights, Show Lights, Decorative items, Construction Material, Acoustics, and more from, across the world. Tradesyndicate supplies its products to both Trade and Retail clients, We stock our material at the conversion company in order to save extra loading charges and transportation on the materials. Hence, Tradesyndicate concentrates on giving the most astounding quality, fine furnitures and extraordinary client benefits.</p>
        </div>
      </div>

      <div className="exports-gallery-grid">
        {
          Imports.map((item, index) => (
            <div key={index} className="exports-gallery-item">
              <img src={item} alt="item" />
            </div>
          ))
        }
      </div>
      <ContactCard />
      <F3 />
      <OverlayFooter />
    </div>
  )
}

export default International