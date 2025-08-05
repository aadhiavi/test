import React from 'react';
import './Tiles.css';
import NavbarTest from '../../components/navbar/NavbarTest';
import TileBody from './TileBody';
import Slider from './Slider';
import F3 from '../../components/Footer/Footer';
import ContactCard from '../Home/component/ContactCard';

const Tiles = () => {
    return (
        <div className='tiles'>
            <div className='tile-nav'>
                <NavbarTest />
            </div>
            <Slider />
            <TileBody />
            <ContactCard />
            <F3 />
        </div>
    );
};

export default Tiles;
