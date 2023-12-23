// Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';
const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/PearlAngelie07/repos'
        );
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="projects-container">
      <h2>GitHub Repositories</h2>
      <ol className="repository-list">
        {repositories.map((repo, index) => (
          <li key={repo.id}>
            <h3>
              {`${index + 1}. `}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
            </h3>
            <p>{repo.description || 'No description available.'}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
