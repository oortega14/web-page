import { FC } from 'react';

interface ExperienceProps {
  translations: {
    experience: {
      title: string;
      items: Array<{
        title: string;
        company: string;
        companyLogo: string;
        period: string;
        description: string;
        technologies: Array<{
          name: string;
          logo: string;
        }>;
      }>;
    };
  };
}

export const Experience: FC<ExperienceProps> = ({ translations }) => {
  return (
    <section id='experience' className='py-20 px-10'>
      <h2 className='text-4xl font-bold mb-8'>
        {translations.experience.title}
      </h2>
      <div className='relative'>
        <div className='absolute left-[15px] md:left-[23px] h-full w-[2px] bg-red-600 top-[9px]'></div>
        <div className='space-y-16'>
          {translations.experience.items.map((experience, index) => (
            <div key={index} className='relative flex'>
              <div className='absolute left-0 md:left-2 w-8 h-8 rounded-full mt-2 overflow-hidden'>
                <img
                  src={experience.companyLogo}
                  alt={experience.company}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='ml-16 md:ml-20 w-full  rounded-[35px] p-6 '>
                <h3 className='text-2xl font-semibold mb-2'>
                  {experience.title}
                </h3>
                <p className='text-red-300 mb-4'>
                  {experience.company} | {experience.period}
                </p>
                <p style={{ whiteSpace: 'pre-line' }} className='mb-4'>
                  {experience.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className='flex items-center gap-1 bg-[#3c0000] px-3 py-1 rounded-full'>
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className='w-4 h-4'
                      />
                      <span className='text-sm'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
