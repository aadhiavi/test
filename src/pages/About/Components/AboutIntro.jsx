import React from 'react';
import '../About.css';
import prefabImg from '../../../assets/prefab-bg.jpg';

const AboutIntro = () => {
    return (
        <div className="about-intro">
            <img src={prefabImg} alt="" />
            <div className="about-intro-container">
                <h2>HIGH QUALITY STRUCTURAL STEEL BUILDING</h2>
                <p>Trade Syndicate provides consistent Quality to the customers. Strict quality assurance is Inherent in every step of our process, from incoming raw materials to shipment of the finished product. Each of our raw materials is selected by our experienced purchasing department, based on strict physical and product criteria.</p>
                <div className="about-intro-btn">
                    <button>PEBs</button>
                    <button>Applications</button>
                    <button>Solutions</button>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro;