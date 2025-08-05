import React from 'react';
import './Overlay.css'
import { FaWaterLadder } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosStats } from 'react-icons/io';
import { ImPriceTags } from 'react-icons/im';
import { MdConstruction } from 'react-icons/md';

const Overlay = ({handleBack}) => {
    return (
        <div onClick={handleBack}>
            <div className='overlay'>
                <div>
                     Quick Links
                    <ul>
                        <li><Link to='/international'>Trade Syndicate International</Link></li>
                        <li><Link to='/'>Trade Syndicate (HYD)</Link></li>
                        <li><Link to='http://suhanadtour.com/'>Suhana Destinations & Travels</Link></li>
                        <li><Link to='http://suhanabeulahhotels.com'>Suhana Beulah Hotels & Resorts</Link></li>
                        <li><Link to='/aviation'>APFT Aviation</Link></li>
                        <li><Link to='/market'>Beulah Supermarket</Link></li>
                        <li><Link to='/it'>Golden Sash IT Solutions</Link></li>
                        <li><Link to='/crystalline'>Beulah Crystalline</Link></li>
                        <li><Link to='/health'>Beulah Health Services</Link></li>
                        <li><Link to='/space'>Suresh Arun SpaxeX Tech</Link></li>
                        <li><Link to='/ngo'>Suhana Beulah Foundation (NGO)</Link></li>
                    </ul>
                </div>
                <div className="overlay-content-list">
                    <div className='overlay-content-btn1'>
                        <Link to='/projects' className='overlay-content-icon'><IoIosStats /></Link>
                        Projects
                    </div>
                    <div className='overlay-content-btn2'>
                        <Link to='' className='overlay-content-icon'><ImPriceTags /></Link>
                        Prices
                    </div>
                    <div className='overlay-content-btn3'>
                        <Link to='/about' className='overlay-content-icon'><MdConstruction /></Link>
                        Prefabs
                    </div>
                    <div className='overlay-content-btn4'>
                        <Link to='/hospitality' className='overlay-content-icon' ><FaWaterLadder /></Link>
                        Hospitolity
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overlay