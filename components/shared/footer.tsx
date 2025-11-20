import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full   mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center'>
          &copy; {currentYear} {APP_NAME}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;