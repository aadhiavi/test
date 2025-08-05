import React from 'react'
import './About.css';
import AboutIntro from './Components/AboutIntro';
import Prefabs from './Components/Prefabs';
import structure from '../../assets/prefab-structure.jpeg'
import PebAdvantages from './Components/PebAdvantages';
import PebSolutions from './Components/PebSolutions';
import Dome from './Components/Dome';
import ContactCard from '../Home/component/ContactCard';
import F3 from '../../components/Footer/Footer';
import OverlayFooter from '../../components/OverlayFooter/OverlayFooter';

const About = () => {
  return (
    <div>
        <AboutIntro/>
        <div className='prefab-main-image'>
          <h2>PEB Full Structure</h2>
          <img src={structure} alt="" />
        </div>
        <Prefabs/>
        <PebAdvantages/>
        <PebSolutions/>
        <Dome/>
        <ContactCard />
        <F3/>
        <OverlayFooter />
    </div>
  )
}

export default About