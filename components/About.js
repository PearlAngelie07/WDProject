// About.js

import React, { useState } from 'react';
import Modal from './Modal';
import './About.css';

// Import the components for each section
import Address from './AboutSections/Address';
import Hobbies from './AboutSections/Hobbies';
import PersonalValues from './AboutSections/PersonalValues';
import Characteristics from './AboutSections/Characteristics';
import School from './AboutSections/School';
import StrandAndCourse from './AboutSections/StrandAndCourse';
import AcademicAchievements from './AboutSections/AcademicAchievements';
import Favorites from './AboutSections/Favorites';

import AddressImage from '../Images/Address.jpg';
import HobbiesImage from '../Images/Hobbies.jpg';
import PersonalValuesImage from '../Images/PersonalValues.jpg';
import CharacteristicsImage from '../Images/Characteristics.jpg';
import SchoolImage from '../Images/School.jpg';
import StrandAndCourseImage from '../Images/StrandAndCourse.jpg';
import AcademicAchievementsImage from '../Images/Achievements.jpg';
import FavoritesImage from '../Images/Favorites.jpg';
import MyPic from '../Images/me.jpg';
import AboutBackgroundImage from '../Images/bg.jpg'; // Import the background image

const sectionComponents = {
  'Address': { component: <Address />, backgroundImage: AddressImage },
  'Hobbies': { component: <Hobbies />, backgroundImage: HobbiesImage },
  'Personal Values': { component: <PersonalValues />, backgroundImage: PersonalValuesImage },
  'Characteristics': { component: <Characteristics />, backgroundImage: CharacteristicsImage },
  'School': { component: <School />, backgroundImage: SchoolImage },
  'Strand And Course': { component: <StrandAndCourse />, backgroundImage: StrandAndCourseImage },
  'Academic Achievements': { component: <AcademicAchievements />, backgroundImage: AcademicAchievementsImage },
  'Favorites': { component: <Favorites />, backgroundImage: FavoritesImage },
};

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const openModal = (section) => {
    setSelectedSection(section);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="about-container" style={{ backgroundImage: `url(${AboutBackgroundImage})` }}>
      <img src={MyPic} alt="My Picture" className="profile-image" />
      <h1>PEARL ANGELIE O. LANSANG</h1>

      <div className="buttons-container">
        {/* Buttons for each section */}
        {Object.keys(sectionComponents).map((section) => (
          <button key={section} onClick={() => openModal(section)}>
            {section}
          </button>
        ))}
      </div>

      {/* Render the selected section component in the modal */}
      {showModal && selectedSection && sectionComponents[selectedSection] && (
        <Modal
          section={selectedSection}
          onClose={closeModal}
          backgroundImage={sectionComponents[selectedSection].backgroundImage}
        >
          {sectionComponents[selectedSection].component}
        </Modal>
      )}
    </div>
  );
};

export default About;
