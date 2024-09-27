import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex flex-center wrapper space-x-2 flex-col gap-4 p-5 sm:flex-row text-center'>
        <Link href='/'>
        <Image src='/assets/images/logo.svg' width={98} height={38} alt='logo'/>
        
        </Link>
        <p>2024 Evanty. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;