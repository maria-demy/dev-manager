import React from 'react';
import { observer } from 'mobx-react';
import projectStore from '../store/projectStore';

const Projects = observer(() => {
  return (
    <div>
      <h1>Projects Dashboard</h1>
      {projectStore.projects.map((project, index) => (
        <p key={index}>{project.name}</p>
      ))}
    </div>
  );
});

export default Projects;
