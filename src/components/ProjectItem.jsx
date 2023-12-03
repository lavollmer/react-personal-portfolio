import React from "react";

//import data from portfolio.js
function ProjectItem({ title, link, bio }) {
  return (
    <>
      <div>{/* <img className="placeholder-images"/> */}</div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{bio}</p>
      </div>
      <div>
        <p>{link}</p>
      </div>
    </>
  );
}

export default ProjectItem;
