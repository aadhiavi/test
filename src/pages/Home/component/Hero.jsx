import React, { useEffect, useState } from 'react'
import '../Home.css'
import { IoPlayCircleOutline } from 'react-icons/io5'
import vdo from '../../../assets/trade vd (2).mp4'
import ModelVideo from './ModelVideo'
import { Link, useNavigate } from 'react-router-dom'
import OverlayContact from './OverlayContact'
import img1 from '../../../assets/cnstn.png';
import img2 from '../../../assets/So11.jpg';
import img3 from '../../../assets/Doors/33.jpg';
import img4 from '../../../assets/tiles.jpg';
import img5 from '../../../assets/hotelesential.jpeg';
import { MdPhone } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [modelVideo, setModelVideo] = useState(false);
  const [book, setBook] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClickModelVideo = () => {
    setModelVideo(!modelVideo)

  }
  const handleBook = () => {
    setBook(!book)
  };

  const slides = [
    (
      <div className="hero-container" key="hero">
        <h1>Experts in Complete Turnkey</h1>
        <h3>
          Project <strong>Design, Implementation, Execution & Delivering</strong> on Time
        </h3>
        <p>TRADE SYNDICATE in Kharkhana, Hyderabad</p>
        <div className="hero-btn">
          <button><Link to="/projects">Our Projects</Link></button>
          <span onClick={handleClickModelVideo}>
            <IoPlayCircleOutline size={35} /> Watch Progress
          </span>
        </div>
        <a href="tel:+914048507745"><MdPhone /> +91-4048507745</a>
        <a href="mailto:contact@tradesyndicate.in"><TfiEmail /> contact@tradesyndicate.in</a>
      </div>
    ),
    (
      <div className="company-list" key="companies">
        <h1>Our Group of Companies</h1>
        <ul>
          <li onClick={() => navigate('/international')}>Trade Syndicate International</li>
          <li onClick={() => navigate('/')}>Trade Syndicate (HYD)</li>
          <li onClick={() => window.location.href = 'http://suhanadtour.com'}>Suhana Destinations & Travels</li>
          <li onClick={() => window.location.href = 'http://suhanabeulahhotels.com'}>Suhana Beulah Hotels & Resorts</li>
          <li onClick={() => navigate('/aviation')}>APFT Aviation</li>
          <li onClick={() => navigate('/market')}>Beulah Supermarket</li>
          <li onClick={() => navigate('/it')}>Golden Sash IT Solutions</li>
          <li onClick={() => navigate('/crystalline')}>Beulah Crystalline</li>
          <li onClick={() => navigate('/health')}>Beulah Health Services</li>
          <li onClick={() => navigate('/space')}>Suresh Arun SpaxeX Tech</li>
          <li onClick={() => navigate('/ngo')}>Suhana Beulah Foundation (NGO)</li>
        </ul>
        <div className='contact-section'>
          <a href="tel:+914048507745"><MdPhone /> +91-4048507745</a>
          <a href="mailto:contact@tradesyndicate.in"><TfiEmail /> contact@tradesyndicate.in</a>
        </div>
      </div>
    )
  ];

  return (
    <>
      <div className='hero'>
        <div className='layer-filter'></div>
        <div className="hero-box">
          <div className='slide-content'>{slides[current]}</div>
          <div className="progress-bar-wrapper">
            <div key={current} className="progress-bar" />
          </div>
          <div className='hero-mini-container'>
            <div className='img-box1' onClick={() => navigate('/projects')}>
              <img src={img1} alt="" />
              <div>
                <h3>Construction</h3>
                <p>Experts in Complete Turnkey</p>
              </div>
            </div>
            <div className='img-box' onClick={() => navigate('/about')}>
              <img src={img2} alt="" />
              <div>
                <h3>Prefabs</h3>
                <p>PEBs,Applications,Solutions</p>
              </div>
            </div>
            <div className='img-box2' onClick={() => navigate('/windows-doors')}>
              <img src={img3} alt="" />
              <div>
                <h3>Windows & Doors</h3>
                <p>Auto Sliding,hinged,curtain</p>
              </div>
            </div>
            <div className='img-box' onClick={() => navigate('/tiles')}>
              <img src={img4} alt="" />
              <div>
                <h3>Tiles</h3>
                <p>Bringing architectural & interior visions to life</p>
              </div>
            </div>
            <div className='img-box1' onClick={() => navigate('/hospitality')}>
              <img src={img5} alt="" />
              <div>
                <h3>Hospitolity</h3>
                <p>Ceramics, cutlery, bedding, glassware, linen, furniture</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {
        modelVideo && <ModelVideo handleClickModelVideo={handleClickModelVideo} Srcvdo={vdo} />
      }
      {
        book && <OverlayContact handleBook={handleBook} />
      }
    </>

  )
}

export default Hero