import React from 'react';
import projects from '../../shared/projects.json';

const Project = ({ match }) => {
  const matchedProject = projects.filter( project => project.id === match.params.id)[0];
  return(
    <div className="project">
      {matchedProject.title}
    </div>
  )
}

export default Project;
