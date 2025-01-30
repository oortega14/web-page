import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
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
        period: string;
        description: string;
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
      <Head title='index' />

      {/* Cursor personalizado más grande y rojo */}
      <div
        className='custom-cursor fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-screen'
        style={{
          background:
            'radial-gradient(circle, rgba(234, 51, 51, 0.5) 0%, rgba(234, 51, 78, 0.2) 70%, transparent 100%)',
          boxShadow: '0 0 20px 10px rgba(234, 51, 112, 0.3)',
        }}
      />

      <div className='min-h-screen m-0 p-0 bg-black text-white cursor-none'>
        <Header currentLocale={currentLocale} translations={translations} />
        <Main translations={translations} />
        <Experience translations={translations} />
        <Projects translations={translations} />
        <Footer translations={translations} />
      </div>
    </>
  );
}
