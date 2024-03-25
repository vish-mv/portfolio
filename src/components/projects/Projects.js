import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="HearLink"
          des=" HearLink redefines video communication with real-time sign language translation and speech recognition.
          Our platform fosters inclusivity, enabling seamless conversations for all. Experience the future of digital
          interaction – where everyone's voice is heard
          "
          src={projectOne}
        />
        <ProjectsCard
          title="Nilawala Leo Web Project"
          des=" I led front-end design and development for Nilwala Leo Club's official site, creating an engaging, userfriendly experience to amplify their online presence"
          src={projectTwo}
        />
        
        <ProjectsCard
          title="Crop Doc (Ongoing)"
          des="CropDoc is a cutting-edge paddy management system for farmers, offering tools for disease detection, fertilizer optimization, and harvest management. With a user-friendly mobile app and web platform, CropDoc provides personalized recommendations, real-time monitoring, and marketplace integration to enhance agricultural operations and boost crop yield and profitability."
          src={projectThree}
        />
        <ProjectsCard
          title="SYNOTEC 24"
          des="
          Synotec 24 is a dynamic event encompassing ideathons, quizthons, and more, at a zonal level."
          src={projectThree}
        />
      
      </div>
    </section>
  );
}

export default Projects