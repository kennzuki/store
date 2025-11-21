import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../menu';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        {/* 1 */}
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/images/logo.svg'
            alt={`${APP_NAME} logo`}
            height={48}
            width={48}
            priority={true}
            
          />
          <span className='hidden sm:block font-bold text-xl sm:text-2xl'>
            {APP_NAME}
          </span>
        </Link>
        {/* 2 */}
        <div className='flex place-items-center justify-evenly sm:gap-4 space-x-6'>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
