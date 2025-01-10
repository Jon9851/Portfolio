import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <section id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        A showcase of diverse and impactful projects demonstrating my technical ability.
      </p>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {workData.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Project Card */}
            <div
              className="w-full h-64 bg-no-repeat bg-cover bg-center rounded-lg relative group focus:outline-none focus:ring-4 focus:ring-white-300"
              style={{ backgroundImage: `url(${project.bgImage})` }}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            ></div>

            {/* Project Info */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className="font-bold text-white-800 text-lg">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    {project.title}
                  </a>
                </h2>
                {/* Send Icon */}
                <div className="border rounded-full border-white w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-300 transition">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Navigate to ${project.title}`}
                  >
                    <Image
                      src={assets.send_icon}
                      alt={`Navigate to ${project.title}`}
                      className="w-4"
                    />
                  </a>
                </div>
              </div>
              <p className="text-sm text-white-600 mt-1">{project.description}</p>
            </div>

            {/* Demo Button */}
            <div className="mt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-white hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-300 px-6 py-3 rounded-md font-semibold text-sm w-full border-2 border-black"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
