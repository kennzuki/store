import Link from 'next/link';
import ToggleTheme from '../ToggleTheme';
import { Button } from '../ui/button';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3 '>
      <nav className='hidden md:flex w-full max-w-xs gap-4 space-x-6 '>
        <ToggleTheme />
        <Link href='/cart'>
          <Button variant='ghost' size='icon'>
            <ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
            <span className='capitalize'>Cart</span>
          </Button>
        </Link>
        <Link href='/cart'>
          <Button size='icon'>
            <UserIcon className='w-5 h-5 sm:w-6 sm:h-6' />
            <span className='capitalize'>Sign in</span>
          </Button>
        </Link>
      </nav>
      {/* mobile view */}
      <nav className='md:hidden text-black'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
            <SheetTitle> Menu</SheetTitle>
            <ToggleTheme />
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart className='w-5 h-5 sm:w-6 sm:h-6' />
                <small> Cart</small>
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <UserIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                <small> Sign in</small>
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
