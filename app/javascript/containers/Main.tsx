import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LinkedinIcon as LinkedIn, Mail } from 'lucide-react';
import profileImage from '../../../app/assets/images/foto_perfil.webp';

export const Main = ({ translations }: { translations: any }) => {
  const [blinkPosition, setBlinkPosition] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkPosition(
        (prev) => (prev + 1) % (translations.home.title.length + 1)
      );
    }, 300);

    return () => clearInterval(interval);
  }, [translations.home.name]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className='min-h-screen flex items-center justify-center p-8 sm:p-16'>
      <motion.div
        className='max-w-3xl rounded-lg shadow-xl p-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <div className='flex items-center mb-6'>
          <motion.img
            src={profileImage}
            alt='Avatar'
            className='w-24 h-24 rounded-full mr-6'
            variants={itemVariants}
          />
          <motion.h1
            className='text-4xl sm:text-5xl font-bold'
            variants={itemVariants}>
            {translations.home.title
              .split('')
              .map((char: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: blinkPosition > index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {char}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        <motion.p className='text-lg mb-6' variants={itemVariants}>
          {translations.home.description}
        </motion.p>

        <motion.div className='flex space-x-4' variants={itemVariants}>
          <motion.a
            href={translations.home.linkedin_url}
            target='_blank'
            rel='noopener noreferrer'
            className='border-blue-800 border-2 hover:bg-blue-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded transition-colors inline-flex items-center group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <LinkedIn className='mr-2 text-blue-800 group-hover:text-white transition-colors' />
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto: oortega14@gmail.com`}
            className='border-red-800 border-2 hover:bg-red-800 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded transition-colors inline-flex items-center group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Mail className='mr-2 text-red-800 group-hover:text-white transition-colors' />
            Email Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
