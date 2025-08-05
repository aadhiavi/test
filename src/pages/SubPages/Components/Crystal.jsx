import React from 'react'
import Avi from '../../../assets/crystal.jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const Crystal = () => {
  return (
    <div>
            <div className='nav-nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' style={{ filter: 'blur(1px)' }} src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>BEULAH CRYSTALLINE PVT LTD</h2>
                    <p>We are dedicated to providing sustainable solutions by transforming seawater into clean, drinkable water, ensuring access to safe hydration for communities worldwide. By harnessing cutting-edge desalination technology, we turn the ocean's vast resources into a reliable and eco-friendly source of fresh water, supporting both growth and sustainability.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter />
        </div>
  )
}

export default Crystal