import React from 'react';
import projects from '../../shared/projects.json';
import Project from './Project.js';

const Projects = () => (
  <div className="projects">
    {
      projects.map(project =>
        <Project key={project.id} id={project.id} image={project.image} title={project.title} description={project.description} />
      )
    }
  </div>
)

export default Projects;