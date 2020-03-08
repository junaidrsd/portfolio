import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.scss';


const Projects = ({ id, title, description, image }) => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  
  //const path = title.toLowerCase().replace(/ /g, '-');

  return (
    <div className="project">
      <Link className="project__link" to={`/project/${id}`} >
        <div className="project__img-wrapper">
          <img className={"project__image" + (show ? ' project__animate-show' : '')} src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
        </div>
        <div className="project__title">
          <Link to="/">{title}</Link>
        </div>
      </Link>
    </div>
  )
}

export default Projects;