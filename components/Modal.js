// Modal.js

import React from 'react';
import './Modal.css';
import Address from './AboutSections/Address';
import PersonalValues from './AboutSections/PersonalValues';
import Characteristics from './AboutSections/Characteristics';
import AcademicAchievements from './AboutSections/AcademicAchievements';
import Favorites from './AboutSections/Favorites';
import School from './AboutSections/School';
import Hobbies from './AboutSections/Hobbies';
import StrandAndCourse from './AboutSections/StrandAndCourse';

const Modal = ({ section, onClose, backgroundImage }) => {
  const sectionComponents = {
    'Address': <Address />,
    'Personal Values': <PersonalValues />,
    'Characteristics': <Characteristics />,
    'Academic Achievements': <AcademicAchievements />,
    'Favorites': <Favorites />,
    'School': <School />,
    'Hobbies': <Hobbies />,
    'Strand And Course': <StrandAndCourse />,
  };

  const modalStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {sectionComponents[section]}
      </div>
    </div>
  );
};

export default Modal;
