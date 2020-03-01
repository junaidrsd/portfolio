import React from 'react';
import projects from '../../shared/projects.json';
import Project from './Project.js';

const Projects = () => (
  projects.map(project => 
   <Project title={project.title} description={project.description} imageURL={project.imageURL} /> 
  )
)

export default Projects;