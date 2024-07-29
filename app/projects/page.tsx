import { projects } from '@/utils/projects';
import React from 'react';


const ProjectCard = ({ project }:any) => (
  <div className="w-full max-w-full my-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
    <img
      src={project.imgSrc}
      alt={project.alt}
      className="object-cover object-center w-full h-48"
    />
    <div className="flex flex-grow">
      <div className="triangle"></div>
      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
        <div>
          <a
            href={`"/projects/"${project.id}`}
            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
          >
            {project.title}
          </a>
          <a
           href={`/projects/${project.id}`}
            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
          >
            {project.description}
          </a>
          <p className="mb-4">
            {project.details}
          </p>
        </div>
        <div>
          <a
            href={`"/projects/"${project.id}`}
            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            Read More -
          </a>
        </div>
      </div>
    </div>
  </div>
);

const KraiwaProjectsSection = () => {
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mt-14 mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
          We are proud of this projects
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default KraiwaProjectsSection;
