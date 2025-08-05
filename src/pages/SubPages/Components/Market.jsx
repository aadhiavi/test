import React from 'react'
import Avi from '../../../assets/market.jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const Market = () => {
    return (
        <div>
            <div className='nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' style={{ filter: 'blur(3px)' }} src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>BEULAH SUPERMARKET PVT LTD</h2>
                    <p>Our supermarket is committed to providing you with the best possible support and assistance in your journey to success. We strive to make our services accessible and affordable to all, regardless of your needs</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter />
        </div>
    )
}

export default Market