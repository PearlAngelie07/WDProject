// Achievements.js
import React from 'react';
import './AcademicAchievements.css';

const AcademicAchievements = ({backgroundImage}) => {
  return (
    <div className="achievements-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Academic Achievements</h2>
      <div className="category">
        <h3>Elementary:</h3>
        <ul className="elementary-list">
          <li>Grade 1 - 1st Honor</li>
          <li>Grade 2 - 1st Honor</li>
          <li>Grade 3 - 1st Honor</li>
          <li>Grade 4 - 1st Honor</li>
          <li>Grade 5 - With Honor</li>
          <li>Grade 6 - 3rd Honor</li>
        </ul>
      </div>
      <div className="category">
        <h3>High School:</h3>
        <ul className="high-school-list">
          <li>Grade 7 - With Honor</li>
          <li>Grade 8 - With Honor</li>
          <li>Grade 9 - With Honor</li>
          <li>Grade 10 - With Honor</li>
          <li>Grade 11 - 3rd Honor</li>
          <li>Grade 12 - 3rd Honor</li>
        </ul>
      </div>
      <div className="category">
        <h3>College:</h3>
        <ul className="college-list">
          <li>1st Year - None</li>
          <li>2nd Year - Dean's Lister</li>
          <li>3rd Year - (Current)</li>
        </ul>
      </div>
    </div>
  );
};

export default AcademicAchievements;
