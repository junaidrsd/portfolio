import React from 'react';
import projects from '../../shared/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <div className="projects">
    {
      projects.map(project =>
        <ProjectCard key={project.id} id={project.id} image={project.image} title={project.title} description={project.description} />
      )
    }
  </div>
)

export default Projects;
