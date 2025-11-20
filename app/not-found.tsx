'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
      <div className='text-center space-y-6 max-w-md px-4'>
        <h1 className='text-6xl sm:text-8xl font-bold text-gray-900'>404</h1>
        <Image
          src='/images/logo.svg'
          alt='404'
          width={200}
          height={200}
          className='mx-auto'
        />
        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-700'>
          {APP_NAME}
        </h2>
        <p className='text-gray-600 text-lg'>
          Sorry, we couldn&apos;t find that page. It might have been moved or
          deleted.
        </p>
        <div className='flex gap-4 justify-center pt-4'>
          <Link href='/'>
            <Button size='lg'>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
