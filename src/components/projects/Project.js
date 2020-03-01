import React from 'react';
import './Project.scss';

const Projects = ({ id, title, description, image }) => (
  <div className="project">
  <a href="/" >
    <img className="project__image" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
    <div className="project__title">{process.env.PUBLIC_URL}</div>
  </a>
  </div>
)

export default Projects;