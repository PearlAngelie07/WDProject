// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the styles

const Home = () => {
  return (
    <div className="container">
      <nav className="home-navigation">
        <div className="name">Pearl Angelie O. Lansang</div>
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="background-image">
        <div className="welcome-message">
          <h1>Welcome to My Life</h1>
          <p className="description">
            Explore my self, skills, achievements, and academic projects as a BSIT student.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
