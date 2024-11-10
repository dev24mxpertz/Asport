import React from 'react'
import "./componentstyle.css"


const Projects = () => {
  return (
    <div className="Projects_container">
      <div className="Projects_Leftcontainer">
        <h3>Projects</h3>
        <p>Projects that i built in my 1st Year of Experience Tenure</p>
        <span>
          <i class="bi bi-arrow-right"></i>
        </span>
      </div>
      <div className="Projects_rightcontainer">
        <div className="Projects_box"></div>
        <div className="Projects_box"></div>
        <div className="Projects_box"></div>
        <div className="Projects_box"></div>
        <div className="Projects_box"></div>
      </div>
    </div>
  );
}

export default Projects