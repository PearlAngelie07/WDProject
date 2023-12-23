// AboutMe.js
import React from 'react';

const AboutMe = ({ isVisible }) => {
  return isVisible ? (
    <section id="about">
      <h2>About Me</h2>
      <p>Engaging and concise content about yourself, detailing skills, interests, and background.</p>
    </section>
  ) : null;
};

export default AboutMe;
