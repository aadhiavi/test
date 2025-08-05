import React from 'react'
import Avi from '../../../assets/space.mp4'
import '../SubPages.css';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

const Space = () => {
    return (
        <div>
            <div><NavbarTest /></div>
            <div className="group-section">
                <video className='group-section-bg' src={Avi} loop muted autoPlay style={{ filter: 'blur(3px)' }} />
                <div className="group-section-intro">
                    <h2>SURESHARUN SPACEX TECHNOLOGIES PVT LTD</h2>
                    <p>We are a leading space technology company dedicated to providing the best possible solutions in the field of space exploration and colonization.</p>
                    <p>On the Horizon</p>
                </div>
            </div>
            <ContactCard/>
            <F3/>
            <OverlayFooter />
        </div>
    )
}

export default Space