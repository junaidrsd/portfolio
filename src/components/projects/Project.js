import React from 'react';

const Projects = ({title, description, imageURL}) => (
  <a className="project">
    <img className="project__image" src={imageURL} alt={title} />
    <div className="project__title"></div>
  </a>
)

export default Projects;