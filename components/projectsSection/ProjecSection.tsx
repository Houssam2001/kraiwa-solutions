import React from 'react';

const projects = [
  {
    title: "AutoMachme",
    description: "Driving School Management Web Platform",
    details: "The AutoMachme platform is a groundbreaking solution designed exclusively for driving school directors, empowering them with tools to effectively manage every aspect of their institution",
    imgSrc: "/images/automach.png",
    alt: "Project Alpha"
  },
  {
    title: "yotubeLink",
    description: "Short Link Translator and YouTube Video SEO Enhancement",
    details: "This project focuses on developing a versatile website that serves multiple purposes. The website provides three key functionalities.",
    imgSrc: "/images/yotubelink.png",
    alt: "Project Beta"
  },
  {
    title: "Lafiray",
    description: "E-commerce multivendore app to buy and sell piece for cars",
    details: "The application is tailored to streamline the process of buying automotive parts, providing users with a user-friendly platform accessible right from their smartphones. This digital storefront not only simplifies the search for specific auto parts but also facilitates a seamless ordering process.",
    imgSrc: "/images/lafiray.png",
    alt: "Project Gamma"
  }
];

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
            href="#"
            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
          >
            {project.title}
          </a>
          <a
            href="#"
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
            href="#"
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
          Continually Scale Results
        </h2>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          Go to insights -
        </a>
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
