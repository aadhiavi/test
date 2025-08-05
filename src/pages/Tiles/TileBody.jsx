import React from 'react'
import './Tiles.css';
import Img from '../../assets/tile-body.jpg';
import Img1 from '../../assets/Application.jpg';
import Img2 from '../../assets/tile-height.jpg';
import Img3 from '../../assets/tileref.jpg';
import { RiFridgeFill, RiKnifeLine, RiSofaLine, RiToolsFill } from 'react-icons/ri';
import { IoIosBonfire, IoIosFlask, IoIosSnow } from 'react-icons/io';
import { FaHandHoldingDroplet } from 'react-icons/fa6';
import { IoLeaf } from 'react-icons/io5';
import { FaBacteria, FaFeatherAlt, FaHotel } from 'react-icons/fa';
import { BsThermometerSun } from 'react-icons/bs';
import { CiApple } from 'react-icons/ci';
import { MdBathtub, MdCleaningServices, MdOutlineCountertops } from 'react-icons/md';
import { GiHairStrands, GiOfficeChair, GiShop } from "react-icons/gi";

const TileBody = () => {
    return (
        <div>
            <div className='tile-body-section'>
                <div className='tile-body tile-body1'>
                    <h2>Tile Features</h2>
                    <div className='tile-features'>
                        <div className='feature-box'>
                            <span><RiKnifeLine /></span>
                            <p>Resistance to Deep Abrasion</p>
                        </div>
                        <div className='feature-box'>
                            <span><RiToolsFill /></span>
                            <p>Easy to Install</p>
                        </div>
                        <div className='feature-box'>
                            <span><IoIosSnow /></span>
                            <p>Resists Harsh Weather Conditions</p>
                        </div>
                        <div className='feature-box'>
                            <span><FaHandHoldingDroplet /></span>
                            <p>Resists  Water</p>
                        </div>
                        <div className='feature-box'>
                            <span><IoIosFlask /></span>
                            <p>Resists to Acids and Bases</p>
                        </div>
                        <div className='feature-box'>
                            <span><IoLeaf /></span>
                            <p>Eco friendly</p>
                        </div>
                        <div className='feature-box'>
                            <span><FaBacteria /></span>
                            <p>Stain Resistance</p>
                        </div>
                        <div className='feature-box'>
                            <span><BsThermometerSun /></span>
                            <p>Resists to Thermal  Shocks</p>
                        </div>
                        <div className='feature-box'>
                            <span><CiApple /></span>
                            <p>Hygienic</p>
                        </div>
                        <div className='feature-box'>
                            <span><FaFeatherAlt /></span>
                            <p>Lightweight and Easy to Handle</p>
                        </div>
                        <div className='feature-box'>
                            <span><MdCleaningServices /></span>
                            <p>Easy Cleaning</p>
                        </div>
                        <div className='feature-box'>
                            <span><IoIosBonfire /></span>
                            <p>Resists Fire</p>
                        </div>
                    </div>
                </div>
                <div className='tile-body'>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className='tile-body-section'>
                <div className='tile-body2'>
                    <img src={Img1} alt="" />
                </div>
                <div className='tile-body tile-body1'>
                    <h2>Application areas</h2>
                    <div className='tile-features'>
                        <div className='feature-box'>
                            <span><MdOutlineCountertops /></span>
                            <p>Reception</p>
                        </div>
                        <div className='feature-box'>
                            <span><RiFridgeFill /></span>
                            <p>Kitchen</p>
                        </div>
                        <div className='feature-box'>
                            <span><RiSofaLine /></span>
                            <p>Living Room</p>
                        </div>
                        <div className='feature-box'>
                            <span><GiHairStrands /></span>
                            <p>Salon & Spa</p>
                        </div>
                        <div className='feature-box'>
                            <span><GiOfficeChair /></span>
                            <p>Offices</p>
                        </div>
                        <div className='feature-box'>
                            <span><FaHotel /></span>
                            <p>Restaurants & Hotels</p>
                        </div>
                        <div className='feature-box'>
                            <span><MdBathtub /></span>
                            <p>Bathroom</p>
                        </div>
                        <div className='feature-box'>
                            <span><GiShop /></span>
                            <p>Showrooms</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tile-body-features'>
                <div className='features-container'>
                    <div className='tile-body3'>
                        <img src={Img3} alt="" />
                    </div>
                    <div className='tile-body3'>
                        <img src={Img2} alt="" />
                    </div>
                    <div className='tile-body3'>
                        <h1>The 600x1200mm surfaces are first choice because of its versatility and ability to transfer any room. This generous size is perfect for a sleek or contemporary look.</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TileBody