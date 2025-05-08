import React from 'react';
import ProjectCard from '../component/ProjectCard';

const Projects = () => {
    return (


        <div className="flex flex-col justify-center items-center gap-5 px-1 py-1">
        <h1 className="text-5xl px-2 py-9">Projects 🚀</h1>
        <div className="flex flex-row items-center justify-center">
          <ProjectCard />
        </div>
        </div> 
    );
};

export default Projects;