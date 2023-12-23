// PersonalValues.js

import React from 'react';
import './PersonalValues.css';

const PersonalValues = ({backgroundImage}) => {
  return (
    <div className="personal-values-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Personal Values</h2>
      <ul className="values-list">
        <li>
          <h3>Gratitude: </h3>
          Appreciating and acknowledging the positive aspects of life.
        </li>
        <li>
          <h3>Family: </h3>
          Prioritizing the well-being and connection with family members.
        </li>
        <li>
          <h3>Friends: </h3>
          Take time to hang out with friends.
        </li>
        <li>
          <h3>Self-Improvement: </h3>
          Committing to continuous personal and professional growth.
        </li>
        <li>
          <h3>Balance: </h3>
          Striving for equilibrium in various aspects of life, such as work-life balance.
        </li>
        <li>
          <h3>Courage: </h3>
          Confronting fears and taking risks to achieve personal goals.
        </li>
        <li>
          <h3>Generosity: </h3>
          Sharing time, resources, and talents with others.
        </li>
        <li>
          <h3>Responsibility: </h3>
          Taking ownership of one's actions and their consequences.
        </li>
        <li>
          <h3>Open-mindedness: </h3>
          Embracing different perspectives and being receptive to new ideas.
        </li>
        <li>
          <h3>Respect: </h3>
          Treating others with consideration and valuing diversity.
        </li>
      </ul>
    </div>
  );
};

export default PersonalValues;
