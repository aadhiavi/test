import React, { useState } from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import logo from '../../assets/Trade Logo.png'
import { TfiEmail } from 'react-icons/tfi';
import { MdPhone } from 'react-icons/md';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';

const F3 = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            console.log('Please enter a valid email');
            setError('Please enter a valid email address');
            setLoading(false);
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/api/auth/subscribe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                setEmail('');
                setError('Subscribed successfully');
            } else if (response.status === 400 && data.message === 'Email already exists') {
                setError('This email is already subscribed');
            } else {
                setError('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    
        console.log('Subscribed email:', email);
    };
    

    const classErrorMessage = error === 'Subscribed successfully' ? 'error-msg-true' : 'error-msg';
    return (
        <div className='f3'>
            <div className="footer-middle-container">
                <div className="footer-title-section">
                    <div className='footer-links-section'>
                        <img src={logo} alt="jhjhghj" />
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2263.048038633915!2d78.49506763645861!3d17.460768657663422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9be4b194fbcf%3A0x620048d26732a53d!2sTrade%20Syndicate%20Corporate%20office!5e0!3m2!1sen!2sin!4v1736500471421!5m2!1sen!2sin"
                        />
                    </div>

                    <div className='footer-links-section'>
                        <h2>Our subsidiaries</h2>
                        <ul>
                            <li><Link to='/international'>Trade Syndicate International</Link></li>
                            <li><Link to='/'>Trade Syndicate (Home)</Link></li>
                            <li><Link to='/suhanadtour.com'>Suhana Destinations & Travels</Link></li>
                            <li><Link to='/suhanabeulahhotels'>Suhana Beulah Hotels & Resorts</Link></li>
                            <li><Link to='/aviation'>APFT Aviation</Link></li>
                            <li><Link to='/market'>Beulah Supermarket</Link></li>
                            <li><Link to='/it'>Golden Sash IT Solutions</Link></li>
                            <li><Link to='/crystalline'>Beulah Crystalline</Link></li>
                            <li><Link to='/health'>Beulah Health Services</Link></li>
                            <li><Link to='/space'>Suresh Arun SpaxeX Tech</Link></li>
                            <li><Link to='/ngo'>Suhana Beulah Foundation (NGO)</Link></li>
                        </ul>
                    </div>
                    <div className='footer-links-section'>
                        <h2>Prefabrication</h2>
                        <ul>
                            <li><Link to='/about'>PEBs Structure</Link></li>
                            <li><Link to='/about'>PEBs Advantages</Link></li>
                            <li><Link to='/about'>PEBs Types</Link></li>
                            <li><Link to='/about'>PEBs Applications</Link></li>
                            <li><Link to='/about'>PEBs Solutions</Link></li>
                        </ul>
                    </div>
                    <div className='footer-links-section'>
                        <h2>Hospitality</h2>
                        <ul>
                            <li><Link to='/hospitality'>Beddings</Link></li>
                            <li><Link to='/hospitality'>Cutlery</Link></li>
                            <li><Link to='/hospitality'>Ceramics</Link></li>
                            <li><Link to='/hospitality'>Glassware</Link></li>
                            <li><Link to='/hospitality'>Linen</Link></li>
                            <li><Link to='/hospitality'>Furniture</Link></li>
                        </ul>
                    </div>
                    <div className='footer-links-section'>
                        <h2>Address</h2>
                        <ul>
                            <li> <a href="https://maps.app.goo.gl/6MH5ujXMjpNb2fGv6">Plot No 128, Gate Number 6,<br /> Sitaram Nagar, Gunrock Enclave, <br />Secunderabad, Telangana 500009</a></li>
                            <li><Subscribe/></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-declaration">
                    <div className="contact-container">
                        <h2>CONTACT US</h2>
                        <a href="tel:+914048507745"><MdPhone /> +91-4048507745</a>
                        <a href="mailto:contact@tradesyndicate.in"><TfiEmail /> contact@tradesyndicate.in</a>
                    </div>
                    <div className="social-contailer">
                        <a href="#" className="contact-link"><FaWhatsapp /></a>
                        <a href="#" className="contact-link"><BsTwitter /></a>
                        <a href="#" className="contact-link"><FaFacebook /></a>
                        <a href="#" className="contact-link"><BsYoutube /></a>
                        <a href="#" className="contact-link"><RiInstagramLine /></a>
                    </div>
                </div>
                <div className="footer-terms">
                    <p>@2025 Trade Syndicate. All rights reserved. | Privacy & Policy</p>
                </div>
            </div>
        </div>
    )
}

export default F3;