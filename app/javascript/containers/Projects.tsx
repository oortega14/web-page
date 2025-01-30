import { FC } from 'react';

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
  return (
    <section id='projects' className='py-20 px-10'>
      <h2 className='text-3xl font-bold mb-8'>
        {translations?.projects?.title || 'Projects'}
      </h2>
      <div className='grid grid-cols-1 gap-8'>
        {translations?.projects?.items?.map((project, index) => (
          <div
            key={index}
            className='bg-[#600000] rounded-[35px] overflow-hidden shadow-[21px_21px_42px_#3c0000,-21px_-21px_42px_#840000] hover:scale-[1.02] transition-transform duration-300'>
            <div className='flex flex-col md:flex-row'>
              {/* Imagen del proyecto */}
              <div className='w-full md:w-1/2 h-[300px]'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Descripción del proyecto */}
              <div className='w-full md:w-1/2 p-8'>
                <h3 className='text-2xl font-semibold mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-6'>{project.description}</p>

                {/* Tecnologías usadas */}
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

                {/* Enlace al proyecto */}
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
