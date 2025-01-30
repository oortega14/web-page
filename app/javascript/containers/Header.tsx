import { GemIcon as Ruby } from 'lucide-react';
import { FC, useState } from 'react';
import { router } from '@inertiajs/react';
import { LanguageSelector } from '../components/LanguageSelector';
import { MobileMenu } from '../components/MobileMenu';

interface HeaderProps {
  currentLocale?: string;
  translations?: {
    nav: {
      home: string;
      experience: string;
      projects: string;
      contact: string;
    };
  };
}

const Header: FC<HeaderProps> = ({ currentLocale = 'en', translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (locale: string) => {
    router.get(
      window.location.pathname,
      { locale },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true,
      }
    );
    setIsOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-lg z-50 border-b border-white/10'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Ruby className='w-6 h-6 sm:w-8 sm:h-8 mr-2 text-red-500' />
          <span className='text-xl sm:text-2xl md:text-4xl font-bold text-white'>
            Oscar Dev
          </span>
        </div>
        <nav className='hidden md:flex items-center'>
          <ul className='flex space-x-4 sm:space-x-6 mr-4 sm:mr-6'>
            <li>
              <a
                href='#home'
                className='text-white hover:text-red-500 transition-colors'
              >
                {translations?.nav?.home || 'Home'}
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className='text-white hover:text-red-500 transition-colors'
              >
                {translations?.nav?.experience || 'Experience'}
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='text-white hover:text-red-500 transition-colors'
              >
                {translations?.nav?.projects || 'Projects'}
              </a>
            </li>
          </ul>
          <LanguageSelector
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            currentLocale={currentLocale}
            handleLocaleChange={handleLocaleChange}
          />
        </nav>
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='text-white focus:outline-none'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          translations={translations}
          currentLocale={currentLocale}
          handleLocaleChange={handleLocaleChange}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </header>
  );
};

export default Header;