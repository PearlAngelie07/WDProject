// School.js
import React from 'react';
import './School.css';

const School = ({backgroundImage}) => {
  return (
    <div className="school-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>School</h2>
      <div className="school-list">
        <div>
          <p><strong>Primary:</strong></p>
          <p>Cantomimbo Primary School, Cantomimbo, Balilihan, Bohol</p>
        </div>
        <div>
          <p><strong>Elementary:</strong></p>
          <p>Sal-ing Elementary School, Sal-ing, Balilihan, Bohol</p>
          <p>Haguilanan Grande Elementary School, Haguilanan Grande, Balilihan, Bohol</p>
        </div>
        <div>
          <p><strong>Junior and Senior High School:</strong></p>
          <p>San Roque National High School, San Roque, Balilihan, Bohol</p>
        </div>
        <div>
          <p><strong>College (Current):</strong></p>
          <p>Bohol Island State University- Balilihan Campus, Magsija, Balilihan, Bohol</p>
        </div>
      </div>
    </div>
  );
};

export default School;
