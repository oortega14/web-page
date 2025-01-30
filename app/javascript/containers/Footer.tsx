export const Footer = ({ translations }: { translations: any }) => {
  return (
    <footer className='bg-black bg-opacity-50 py-4 mt-12'>
      <div className='container mx-auto px-4 text-center'>
        <p>{translations.footer.copyright}</p>
      </div>
    </footer>
  );
};
