'use client';
import Link from 'next/link';
import { dm_mono } from '@/utils/fonts';
import { List } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export default function Appbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`${dm_mono.className} text-[#868686] flex justify-between sm:justify-around items-center top-0 left-0 right-0`}
    >
      <div>
        <Link href='/' className='text-lg sm:text-xl font-semibold'>
          0xDragon
        </Link>
      </div>

      <button
        className='sm:hidden flex flex-col justify-center items-center space-y-2'
        id='menu-items'
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        <List size={32} />
      </button>

      <div className='hidden sm:flex sm:text-xl sm:font-semibold space-x-20 text-[#868686]'>
        <Link href='/about' className='hover:text-[#b8b8b8]'>
          About
        </Link>
        <Link href='/contact' className='hover:text-[#b8b8b8]'>
          Contact
        </Link>
        <Link href='/projects' className='hover:text-[#b8b8b8]'>
          Projects
        </Link>
      </div>
      <div className='hidden sm:flex sm:font-semibold sm:text-xl'>Avatar</div>

      {isOpen && (
        <div className='sm:hidden absolute top-16 left-0 w-full h-full bg-black text-[#868686s] flex flex-col items-end px-10 space-y-4'>
          <Link href='/about' className='hover:text-gray-300'>
            About
          </Link>
          <Link href='/contact' className='hover:text-gray-300'>
            Contact
          </Link>
          <Link href='/projects' className='hover:text-gray-300'>
            Projects
          </Link>
          <div>Avatar</div>
        </div>
      )}
    </nav>
  );
}
