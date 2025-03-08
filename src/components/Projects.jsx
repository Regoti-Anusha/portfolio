import React from 'react'
import '../styles/Project.css'

const Projects = () => {
    const projectList = [
        {
          title: 'Project 1',
          description: 'Clone Innomatics Website',
          technologies: 'HTML, CSS',
          link:' https://github.com/Regoti-Anusha/internProject',
          output: ' https://regoti-anusha.github.io/internProject/',
        },
        {
          title: 'Project 2',
          description: 'Memory Match-Game',
          technologies: 'HTML, CSS, Javascript',
          link: 'https://github.com/Regoti-Anusha/memoryGame1',
          output: ' https://regoti-anusha.github.io/memoryGame1/'
        }
      ];
    
      return (
        <div className="projects">
          <h2>My Projects</h2><hr/>
          <div className='proj'>
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a><br/>
              <a href={project.output} target="_blank" rel="noopener noreferrer">View Output</a>
              
            </div>
            
          ))}
          </div>
        </div>
      );
    };
    

export default Projects
