import React from 'react'
import Avi from '../../../assets/aviation.jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const Aviation = () => {
    return (
        <div>
            <div className='nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>APFT AVIATION PVT. LTD</h2>
                    <p>Aviation is the commercial transportation of people and goods between airports and airfields. It is an essential component of global commerce, transportation, and communication.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter />
        </div>
    )
}

export default Aviation;