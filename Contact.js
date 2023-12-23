// Contact.js
import React from 'react';

const Contact = ({ isVisible }) => {
  return isVisible ? (
    <section id="contact">
      <h2>Contact</h2>
      {/* Include phone number, email, and social media links */}
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: your.email@example.com</p>
      <div>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  ) : null;
};

export default Contact;
