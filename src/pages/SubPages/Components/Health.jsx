import React from 'react'
import Avi from '../../../assets/health.jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const Health = () => {
    return (
        <div>
            <div className='nav-nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' style={{ filter: 'blur(3px)' }} src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>BEULAH HEALTH SERVICES PVT LTD</h2>
                    <p>We are committed to providing exceptional care and support to our clients, ensuring that they receive the best possible healthcare and wellness services.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter/>
        </div>
    )
}

export default Health