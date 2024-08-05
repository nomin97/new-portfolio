import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'poppinMovies',
      description: 'An interactive front-end app enabling users to search for movies and TV shows, and discover streaming, renting, or purchasing options.',
      link: "https://akleynhans.github.io/Popping-Movies/",
      repo: "https://github.com/Akleynhans/Popping-Movies"
    },
    {
      name: 'twitwit',
      description: 'A comprehensive full-stack social media platform enabling user registration, authentication, posting of thoughts, and interaction with other users thoughts.',
      link: "https://twitwit-3030f5d6caaa.herokuapp.com/",
      repo: "https://github.com/Blakewb3/Twitwit"
    },
    {
      name: 'pawPrint',
      description: 'An interactive MERN Stack employee side kennel application that allows the employee to create their account, add/update dog and owner profiles, and update rooms.',
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
