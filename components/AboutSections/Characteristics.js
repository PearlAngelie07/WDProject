// Characteristics.js

import React, { useState, useEffect } from 'react';
import './Characteristics.css'; // Import the corresponding CSS file

const Characteristics = ({backgroundImage}) => {
  const [lines, setLines] = useState([]);
  const content = [
    "I am an ambivert type of person.",
    "Sometimes I want to be alone and sometimes I want to hang out with my friends.",
    "I love staying at home and I don't like crowded or public places.",
    "I'm a softhearted one, and they said the proof is my love for animals.",
    "It's easy for me to understand other people's situations, and I don't want a fight.",
     "I work hard and patiently for the things that I want to have and learn."
  ];

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    let lineIndex = 0;
    let charIndex = 0;
    const intervalId = setInterval(() => {
      if (lineIndex < content.length) {
        const currentLine = content[lineIndex];
        if (charIndex <= currentLine.length) {
          setLines((prevLines) => {
            const newLines = [...prevLines];
            newLines[lineIndex] = currentLine.slice(0, charIndex);
            return newLines;
          });
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Adjust the interval as needed
  };

  return (
    <div className="characteristics-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Characteristics</h2>
      {lines.map((line, index) => (
        <p key={index} className="typing-transition">{line}</p>
      ))}
    </div>
  );
};

export default Characteristics;
