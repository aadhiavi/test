import React from 'react';
import './Projects.css';
import ContactCard from '../Home/component/ContactCard';
import F3 from '../../components/Footer/Footer';
import img1 from '../../assets/complete2.jpg';
import img2 from '../../assets/complete4.jpg';
import img3 from '../../assets/complete5.jpg';
import img4 from '../../assets/complete.jpeg';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import img5 from '../../assets/dornakal going 2.jpg'
import img6 from '../../assets/jesus calls going6.jpg'
import img7 from '../../assets/Lutheran_Church going3.jpg'
import img8 from '../../assets/Madurai_portico-going5.jpg'
import OverlayFooter from '../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../components/navbar/NavbarTest';

const Projects = () => {
  const cardData = [
    { id: 1, title: "Nissi church", imageUrl: img1 },
    { id: 2, title: "NLAG", imageUrl: img2 },
    { id: 3, title: "Dream centre", imageUrl: img3 },
    { id: 4, title: "See All", imageUrl: img4, icon: <HiOutlineArrowRightCircle /> },
  ];
  const cardData2 = [
    { id: 1, title: "Dornakal", imageUrl: img5 },
    { id: 2, title: "Jesus Calls", imageUrl: img6 },
    { id: 3, title: "On Horizon", imageUrl: img7 },
    { id: 4, title: "See All", imageUrl: img8, icon: <HiOutlineArrowRightCircle /> },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/projects/completed')
  };
  const handleNavigate2 = () => {
    navigate('/projects/ongoing')
  };

  return (
    <div className='project-main'>
      <div className='project-nav'>
        <NavbarTest />
      </div>
      <div className='project-completed'>
        <h1>Our Projects</h1>
        <div className="card-wrapper">
          {cardData.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="card-content">
                <h3 onClick={handleNavigate}>{card.title} {card.icon && card.icon}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='project-completed'>
        <h1>On Going Projects</h1>
        <div className="card-wrapper">
          {cardData2.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="card-content">
                <h3 onClick={handleNavigate2}>{card.title} {card.icon && card.icon}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-card-projects"><ContactCard /></div>
      <F3 />
      <OverlayFooter/>
    </div>
  );
};

export default Projects;
