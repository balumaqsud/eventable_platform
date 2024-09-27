import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  Button } from '../ui/button';
import {SignedOut, SignedIn, UserButton} from '@clerk/nextjs';
import NavItems from './NavItems';
import MobileNav from './MobileNav';


const Navbar = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex  items-center justify-between'>
            <Link href='/' className='w-36'>
                <Image src='/assets/images/logo.svg' width={128} height={36} alt='eventy logo' />
            </Link>

            <SignedIn>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavItems />
              </nav>
            </SignedIn>


            <div className='flex w-32 justify-end gap-3'>
              <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <MobileNav/>
              </SignedIn>
              <SignedOut>
                <Button asChild className='rounded-full' size='lg' variant='secondary'>
                  <Link href='/sign-in'>
                  Login
                </Link>
                </Button>
              </SignedOut>
            </div>
        </div>

    </header> 
    
  )
}

export default Navbar;