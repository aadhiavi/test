import React from 'react';
import './Roadmap.css';
import road from '../../../assets/roadmap.png';

const Roadmap = () => {
    return (
        <div className='roadmap'>
            <div className="roadmap-intro">
                <h2>OUR ROADMAP</h2>
                <p>Discover how Trade Syndicate is positioned to shape the future of technology and innovation.</p>
            </div>
            <div className='road-bgi'>
                <img src={road} alt="" />
            </div>
            <div className="key-roles">
                <div className='role-main'>
                    <div className="role">
                        <span className='top-round'>1</span>
                        <span></span>
                    </div>
                    <div className="role-info">
                        <h2>Business Strategy and Planning</h2>
                        <ul>
                            <li>Identify client needs and industry trends.</li>
                            <li>Develop scalable solutions for diverse construction projects.</li>
                            <li>Build strategic partnerships and collaborations for growth.</li>
                        </ul>
                    </div>
                </div>
                <div className='role-main2'>
                    <div className="role">
                        <span className='top-round'>2</span>
                        <span></span>
                    </div>
                    <div className="role-info">
                        <h2>Design and Innovation</h2>
                        <ul>
                            <li>Focus on sustainable and eco-friendly designs.</li>
                            <li>Integrate modern technology and prefabrication methods.</li>
                            <li>Offer custom designs tailored to client specifications.</li>
                        </ul>
                    </div>
                </div>
                <div className='role-main3'>
                    <div className="role">
                        <span className='top-round'>3</span>
                        <span></span>
                    </div>
                    <div className="role-info">
                        <h2>Execution and Construction</h2>
                        <ul>
                            <li>Ensure timely and cost-effective project delivery.</li>
                            <li>Prioritize quality control and safety measures.</li>
                            <li>Use skilled labor and advanced construction techniques.</li>
                        </ul>
                    </div>
                </div>
                <div className='role-main4'>
                    <div className="role">
                        <span className='top-round'>4</span>
                        <span></span>
                    </div>
                    <div className="role-info">
                        <h2>Client Relations and Services</h2>
                        <ul>
                            <li>Maintain clear communication and transparency throughout projects.</li>
                            <li>Offer after-construction services and support.</li>
                            <li>Build long-term client relationships through exceptional service.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Roadmap