import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import Bio from "./components/Bio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import ProjectItem from "./components/ProjectItem";
import projects from "./data/projects";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Bio />
        <div>
          for (let i=0; i < projects.length, i++ ) {
            let project = projects[0];
         <ProjectCard
              title={project.title}
              bio={project.bio}
              link={project.link}
            />
          }

          {/* {projects.slice(0, 4).map((project) => (
            <ProjectCard
              title={project.title}
              bio={project.bio}
              link={project.link}
            />
          ))} */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
