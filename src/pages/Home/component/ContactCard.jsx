import React, { useState } from 'react';
import logo from '../../../assets/Trade Logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import axios from 'axios';
import { contactUrl } from '../../../api';

const ContactCard = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setMessageError('');

    const contactData = { name, phone, email, message };
    let isValid = true;

    if (!name) {
      setNameError('Please enter your name');
      isValid = false;
    }

    if (!phone) {
      setPhoneError('Please enter your phone number');
      isValid = false;
    } else if (!/^\d+$/.test(phone) || phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit number');
      isValid = false;
    }

    if (!email) {
      setEmailError('Please enter your email address');
      isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!message) {
      setMessageError('Please enter your message');
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(contactUrl, contactData);

      if (response.status === 200) {
        setStatus('Form submitted successfully!');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'Phone number already exists') {
        setStatus('Something went wrong, please try again');
      } else {
        setStatus('Response already submitted.');
      }
    } finally {
      setLoading(false);
      setOverlay(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className='contact-card'>
      {overlay && (
        <div className="toggle-text">
          <div className="overlay-message">
            <p>{status}</p>
            <button onClick={() => setOverlay(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="contact-container">
        <div className="contact-box">
          <h2>Can't wait to know more?</h2>
          <h3>Let's talk!</h3>
          <p>Feel free to reach out to us for any inquiries or questions.</p>
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-box">
          <form className='contact form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error-message">{nameError}</span>}

            <input
              type="text"
              placeholder="Phone Number*"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && <span className="error-message">{phoneError}</span>}

            <input
              type="email"
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error-message">{emailError}</span>}
            <textarea
              placeholder="Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {messageError && <span className="error-message">{messageError}</span>}
            <button type="submit" disabled={loading}>
              {loading ? <div className="loader"></div> : 'Send'}
            </button>
          </form>
          <div className='contact-icons'>
            <a href="mailto:your-email@example.com" className="contact-link"><TfiEmail /></a>
            <a href="tel:your-phone-number" className="contact-link"><MdPhone /></a>
            <a href="#" className="contact-link"><FaWhatsapp /></a>
            <a href="https://maps.app.goo.gl/6MH5ujXMjpNb2fGv6" className="contact-link"><IoLocationOutline /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

