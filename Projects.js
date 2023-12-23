// Projects.js
import React from 'react';

const Projects = ({ isVisible }) => {
  return isVisible ? (
    <section id="projects">
      <h2>Projects</h2>
      {/* Link to your GitHub repositories */}
      <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">Project 1</a>
      <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">Project 2</a>
      {/* Add more projects as needed */}
    </section>
  ) : null;
};

export default Projects;
