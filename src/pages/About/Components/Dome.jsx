import React from 'react'
import '../About.css';
import dome from '../../../assets/dome-bgm.jpg';
import { domeImages } from '../../../components/ImageStore/ImageStore';

const Dome = () => {

    return (
        <div className='dome-main-container'>
            <div className="dome-container">
                <div className="dome-text">
                    <h2>PEB Dome</h2>
                    <p>Trade Syndicate specializes in dome tents, glass dome tents, hotel tents, customized tents, event tents, and more, offering innovative solutions for various outdoor and hospitality needs.</p>
                    <p>Our products are mostly exclusive design-patented items, backed by a variety of patents and international export certifications, ensuring high quality and uniqueness in every tent we create.</p>
                    <p>We pride ourselves on delivering durable, versatile, and aesthetically pleasing tents that meet the diverse demands of our clients worldwide.</p>
                    <p>With a commitment to excellence and customer satisfaction, we continuously push the boundaries of design and functionality in the tent industry.</p>
                </div>
                <img src={dome} alt="dome" />
            </div>
            <div className="dome-slider-container">
                {
                    domeImages.map((image, index) => (
                        <div key={index} className="dome-item">
                            <img src={image} alt="" />
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default Dome