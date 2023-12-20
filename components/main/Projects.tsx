import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/mystitsu.png"
          title="Martial Art School"
          description="it's a martial school website. i used Vite. i used firebase for authentication here and many technologies i used. people can book class, see details about classes and instructors. admin can approve class, delete user, add class and add instructors etc etc"
        />
        <ProjectCard
          src="/bistroboss.png"
          title="Bistro Boss"
          description="This website is a website of a resturant. i used firebase, Stripe, and many technologies. people can order food, payment and many things and there is admin feature also"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Next js Portfolio"
          description="It's a next js portfolio. i used many modern technologies here like TypeScript, Framer motion, three js and many more"
        />
      </div>
    </div>
  );
};

export default Projects;
