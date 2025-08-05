import React from 'react'
import Avi from '../../../assets/ngo (1).jpg'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';
const NGO = () => {
    return (
        <div>
            <div className='nav-nav'><NavbarTest /></div>
            <div className="group-section">
                <img className='group-section-bg' style={{ filter: 'blur(3px)' }} src={Avi} alt="" />
                <div className="group-section-intro">
                    <h2>Suhana Beulah Foundation (NGO)</h2>
                    <p>Suhana Beulah Foundation is a non-profit organization that works to address the root causes of poverty and inequality in rural India. We focus on providing education, healthcare, and social services to vulnerable communities.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter/>
        </div>
    )
}

export default NGO;