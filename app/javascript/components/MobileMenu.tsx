type MobileMenuProps = {
  translations?: {
    nav: {
      home: string;
      experience: string;
      projects: string;
      contact: string;
    };
  };
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentLocale: string;
  handleLocaleChange: (locale: string) => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  translations,
  setIsMobileMenuOpen,
  currentLocale,
  handleLocaleChange,
}) => {
  return (
    <div className='md:hidden bg-black/90 backdrop-blur-lg'>
      <ul className='flex flex-col space-y-4 p-4'>
        <li>
          <a
            href='#home'
            className='block text-white hover:text-red-500 transition-colors'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations?.nav?.home || 'Home'}
          </a>
        </li>
        <li>
          <a
            href='#experience'
            className='block text-white hover:text-red-500 transition-colors'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations?.nav?.experience || 'Experience'}
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className='block text-white hover:text-red-500 transition-colors'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {translations?.nav?.projects || 'Projects'}
          </a>
        </li>
        <li>
          <div className='flex space-x-2'>
            <button
              onClick={() => {
                handleLocaleChange('es');
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded ${
                currentLocale === 'es'
                  ? 'bg-red-500/80 text-white'
                  : 'bg-gray-700/50 text-white hover:bg-red-500/50'
              } transition-colors`}
            >
              ES
            </button>
            <button
              onClick={() => {
                handleLocaleChange('en');
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-1 rounded ${
                currentLocale === 'en'
                  ? 'bg-red-500/80 text-white'
                  : 'bg-gray-700/50 text-white hover:bg-red-500/50'
              } transition-colors`}
            >
              EN
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};