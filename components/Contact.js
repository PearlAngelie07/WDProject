// Contact.js
import React from 'react';
import './Contact.css';
import BackgroundImage from '../Images/Contact.png'; // Import the background image

import GmailIcon from '../Images/Gmail.png';
import PhoneIcon from '../Images/Phone.jpg';
import FacebookIcon from '../Images/Facebook.png';
import InstagramIcon from '../Images/Instagram.png';

const iconStyle = {
  width: '24px', // Adjust the width as needed
  height: '24px', // Adjust the height as needed
};

const Contact = () => {
  return (
    <div className="contact-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="contact-details">
        
        <ul>
          <li>
            <img src={PhoneIcon} alt="Phone Icon" style={iconStyle} />
            <span>Phone Number: </span>
            <a href="tel:+639079156171">+639079156171</a>
          </li>
          <li>
            <img src={GmailIcon} alt="Email Icon" style={iconStyle} />
            <span>Email: </span>
            <a href="mailto:pearlangelielansang@gmail.com">pearlangelielansang@gmail.com</a>
          </li>
          <li>
            <img src={FacebookIcon} alt="Facebook Icon" style={iconStyle} />
            <span>Facebook: </span>
            <a href="https://www.facebook.com/pearlangelie.lansang" target="_blank" rel="noopener noreferrer">
              Pearl Angelie Ombay Lansang
            </a>
          </li>
          <li>
            <img src={InstagramIcon} alt="Instagram Icon" style={iconStyle} />
            <span>Instagram: </span>
            <a href="https://www.instagram.com/sorairoTetsuya_07" target="_blank" rel="noopener noreferrer">
              Pearl Angelie Ombay Lansang
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
