import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Project() {
  return (
    <div>
      <p>Project</p>
      {/* for (let i=0; i < projects.length, i++ ) {
            let project = projects[0];
         <ProjectCard
              title={project.title}
              bio={project.bio}
              link={project.link}
            />
          } */}

      {/* {projects.slice(0, 4).map((project) => (
            <ProjectCard
              title={project.title}
              bio={project.bio}
              link={project.link}
            />
          ))} */}
    </div>
  );
}

export default Project;
