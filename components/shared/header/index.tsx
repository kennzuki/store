import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
        <div className='flex gap-2 sm:gap-4'>
          <Link href='/cart'>
            <Button variant='ghost' size='icon'>
              <ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
            </Button>
          </Link>

          <Button variant='ghost' size='icon'>
            <UserIcon className='w-5 h-5 sm:w-6 sm:h-6' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
