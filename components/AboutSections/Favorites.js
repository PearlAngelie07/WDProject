// Favorites.js
import React, { useState, useEffect } from 'react';
import './Favorites.css';

const favoritesData = [
  { title: 'Color', content: 'Skyblue' },
  { title: 'Number', content: '7' },
  { title: 'Food', content: 'Wafers' },
  { title: 'Flavor', content: 'Chocolate' },
  { title: 'Book', content: 'Sherlock Holmes' },
  { title: 'Place', content: 'Japan' },
  { title: 'Movie', content: 'Violet Evergarden' },
  { title: 'Song', content: "Can't Let You Go by Cueshe" },
  { title: 'Singer Artist', content: 'Taylor Swift' },
];

const Favorites = ({backgroundImage}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enterDirection, setEnterDirection] = useState('enter-left');

  useEffect(() => {
    const interval = setInterval(() => {
      setEnterDirection((prev) => (prev === 'enter-left' ? 'enter-right' : 'enter-left'));
      setCurrentIndex((prev) => (prev + 1) % favoritesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="favorites-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="favorites-list">
        {favoritesData.map((favorite, index) => (
          <div
            key={index}
            className={`favorite-item ${index === currentIndex ? 'visible' : ''} ${enterDirection}`}
          >
            <div className="favorite-title">{favorite.title}</div>
            <div className="favorite-content">{favorite.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
