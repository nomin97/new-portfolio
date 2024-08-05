import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'poppinMovies',
      description: 'Interactive Front End',
      link: "https://akleynhans.github.io/Popping-Movies/",
      repo: "https://github.com/Akleynhans/Popping-Movies"
    },
    {
      name: 'twitwit',
      description: 'Full Stack',
      link: "https://twitwit-3030f5d6caaa.herokuapp.com/",
      repo: "https://github.com/Blakewb3/Twitwit"
    },
    {
      name: 'pawPrint',
      description: 'MERN Stack',
      link: "https://paw-print.onrender.com/",
      repo: "https://github.com/pcstoyle/paw-print"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
