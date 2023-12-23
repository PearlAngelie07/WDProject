// Address.js

import React from 'react';
import boholImage from '../../Images/Bohol.jpg';
import balilihanImage from '../../Images/Balilihan.png';
import cantomimboImage from '../../Images/Cantomimbo.jpg';
import './Address.css'; // Import the corresponding CSS file

const Address = ({backgroundImage}) => {
  const addresses = [
    {
      label: 'Province',
      image: boholImage,
      placeLabel: 'Bohol',
    },
    {
      label: 'Municipality',
      image: balilihanImage,
      placeLabel: 'Balilihan',
    },
    {
      label: 'Barangay',
      image: cantomimboImage,
      placeLabel: 'Cantomimbo',
    },
  ];

  return (
    <div className="address-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {addresses.map((address, index) => (
        <div key={index} className="address-item">
          <div className="label">{address.label}</div>
          <img src={address.image} alt={address.label} className="image" />
          <div className="label">{address.placeLabel}</div>
        </div>
      ))}
    </div>
    
  );
};

export default Address;
