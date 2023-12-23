// Hobbies.js
import React from 'react';
import './Hobbies.css'; // Import the corresponding CSS file

// Replace these paths with the actual paths to your images
import singingImage from '../../Images/Singing.jpg';
import drawingImage from '../../Images/Drawing.jpg';
import guitarImage from '../../Images/Guitar.jpg';
import keyboardImage from '../../Images/Keyboard.jpeg';
import readingImage from '../../Images/Reading.jpg';
import animeImage from '../../Images/Anime.jpg';


const hobbiesData = [
  { name: 'Singing', image: singingImage },
  { name: 'Drawing/Sketching', image: drawingImage },
  { name: 'Playing Guitar', image: guitarImage },
  { name: 'Playing Keyboard', image: keyboardImage },
  { name: 'Reading Books', image: readingImage },
  { name: 'Watching Anime', image: animeImage },
];

const Hobbies = ({backgroundImage}) => {
  return (
    <div className="hobbies-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Hobbies</h2>
      <div className="hobbies-list">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <p>{hobby.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
