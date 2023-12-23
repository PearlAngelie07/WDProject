// StrandAndCourse.js
import React from 'react';
import './StrandAndCourse.css';

const StrandAndCourse = ({backgroundImage}) => {
  return (
    <div className="strand-course-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Strand and Course</h2>
      <div className="strand-course-content">
      <p>
          <strong>Junior High School:</strong> Information and Communication Technology (Major : ICT)
        </p>
        <p>
          <strong>Senior High School:</strong> Humanities and Social Sciences (HUMSS)
        </p>
        <p>
          <strong>College:</strong> Bachelor of Science in Information Technology (BSIT)
        </p>
      </div>
    </div>
  );
};

export default StrandAndCourse;
