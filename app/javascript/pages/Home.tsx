import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import Header from '../containers/Header';
import { Main } from '../containers/Main';
import { Experience } from '../containers/Experience';
import { Projects } from '../containers/Projects';
import { Footer } from '../containers/Footer';

interface HomeProps {
  currentLocale: string;
  translations: {
    nav: {
      home: string;
      experience: string;
      projects: string;
      contact: string;
    };
    home: {
      title: string;
      description: string;
      contact_button: string;
    };
    experience: {
      title: string;
      items: Array<{
        title: string;
        company: string;
        companyLogoKey: string;
        period: string;
        description: string;
        technologies: Array<{
          name: string;
          logo: string;
        }>;
      }>;
    };
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
    footer: {
      copyright: string;
    };
  };
}

export default function Home({ currentLocale, translations }: HomeProps) {
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX - 24}px`;
        cursor.style.top = `${e.clientY - 24}px`;
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <Head title={translations.home.title} />
      <div className='fixed top-0 left-0 right-0 bottom-0 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
      <div
        className='custom-cursor fixed w-12 h-12 rounded-full pointer-events-none z-[9999] mix-blend-screen'
        style={{
          background:
            'radial-gradient(circle, rgba(120, 119, 198, 0.5) 0%, rgba(120, 119, 198, 0.2) 70%, transparent 100%)',
          boxShadow: '0 0 20px 10px rgba(120, 119, 198, 0.3)',
        }}
      />

      <div className='relative z-10'>
        <Header currentLocale={currentLocale} translations={translations} />
        <Main translations={translations} />
        <Experience translations={translations} />
        <Projects translations={translations} />
        <Footer translations={translations} />
      </div>
    </>
  );
}
