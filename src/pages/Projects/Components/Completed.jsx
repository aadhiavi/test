import React from 'react'
import { Completes, ongoing } from '../../../components/ImageStore/ImageStore'
import '../Projects.css';
import Slider from '../../../components/Slider/Slider';
import ContactCard from '../../Home/component/ContactCard';
import F3 from '../../../components/Footer/Footer';
import OverlayFooter from '../../../components/OverlayFooter/OverlayFooter';
import NavbarTest from '../../../components/navbar/NavbarTest';

export const Completed = () => {
  return (
    <div>
      <div className='project-nav'><NavbarTest /></div>
      <Slider images={Completes} />
      <ContactCard />
      <F3 />
      <OverlayFooter />
    </div>
  )
}

export const OnGoing = () => {
  return (
    <div>
      <div className='project-nav'><NavbarTest /></div>
      <Slider images={ongoing} />
      <ContactCard />
      <F3 />
      <OverlayFooter />
    </div >
  )
}
