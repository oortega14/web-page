'use client';

import { type FC, useState, useEffect } from 'react';

interface ProjectProps {
  translations?: {
    projects: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        image: string;
        technologies: string[];
        link: string;
      }>;
    };
  };
}

export const Projects: FC<ProjectProps> = ({ translations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % (translations?.projects?.items?.length || 1)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [translations?.projects?.items?.length]);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id='projects' className='py-20 px-10'>
      <h2 className='text-3xl font-bold mb-8'>
        {translations?.projects?.title || 'Projects'}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {translations?.projects?.items?.map((project, index) => (
          <div
            key={index}
            className={`border border-red-600 rounded-[35px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer
                        ${index === activeIndex ? 'scale-105 shadow-xl' : ''}`}
            onClick={() => handleClick(index)}>
            <div className='flex flex-col'>
              <div className='w-full h-[300px]'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-full object-cover object-top'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-6'>{project.description}</p>
                <div className='mb-6'>
                  <h4 className='text-lg font-semibold mb-2'>Technologies:</h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-red-900/50 px-3 py-1 rounded-full text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors'>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
