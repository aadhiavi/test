import React from 'react'
import Avi from '../../../assets/it.jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const It = () => {
    return (
        <div>
            <div className='nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' style={{ filter: 'blur(1px)' }} src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>GOLDEN SASH IT SOLUTIONS PVT LTD</h2>
                    <p>Golden Sash IT Solutions is upcoming leading provider of IT solutions and services. We specialize in transforming businesses and organizations into success stories through our commitment to excellence and innovation.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter />
        </div>
    )
}

export default It;