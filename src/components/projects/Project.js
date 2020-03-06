import React, {useState, useEffect} from 'react';
import './Project.scss';


const Projects = ({ id, title, description, image }) => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  const classes = [

  ]
  return(
    <div className="project">
      <a className="project__link" href="/" >
        <div className="project__img-wrapper">
          <img className={"project__image" + (show ? ' project__animate-show' : '')} src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
        </div>
        <div className="project__title">{process.env.PUBLIC_URL}</div>
      </a>
    </div>
)}

export default Projects;