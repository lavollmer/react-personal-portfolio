import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Bio from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Application has a single Project component that’s used multiple times in the Portfolio section.
//Application must be deployed to Netlify.
function App() {
  return (
    <>
      <div>
        <Header>
          <Navigation />
        </Header>
        <Home />
        <Bio />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
