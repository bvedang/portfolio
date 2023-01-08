import React from 'react';
import './project.css';

function Project() {
  return (
    <div className="project-container mx-auto ">
      <div className="project dark:bg-stone-900 hover:dark:bg-[#292524] text-black dark:text-stone-300">
        <div className="project-text-box">
          <h1 className="heading-secondary">Project title</h1>
          <div className="project-desc">
            <h3 className="heading-tertiary">Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Voluptates explicabo quidem illo eaque aperiam dolores quis</p>
            <p>
              cupiditate tempora natus ex, delectus adipisci qui eos quo! Vel
            </p>
            <p>culpa ducimus officia doloremque?</p>
          </div>
          <h3 className="heading-tertiary tech-stack-heading">Tech Stack</h3>
          <ul className="project-tech-stack">
            <li className="tech-stack-items">Flask</li>
            <li className="tech-stack-items">Flask</li>
            <li className="tech-stack-items">Flask</li>
            <li className="tech-stack-items">Flask</li>
            <li className="tech-stack-items">Flask</li>
          </ul>
        </div>
        <div className="project-img-box">
          <img
            className="project-img"
            src="../../assets/812.jpg"
            alt="Project Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
