'use client';
import Link from 'next/link';
import { dm_mono } from '@/utils/fonts';
import { List } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Appbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

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
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
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
      <div className='hidden sm:flex '>
        <Image src={'/hacker.png'} alt='hacker-png' width={30} height={30} />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className='sm:hidden absolute top-16 left-0 w-full h-full bg-black text-[#868686] flex flex-col items-end px-10 space-y-4 z-50'
        >
          <Link
            href='/about'
            className='hover:text-gray-300'
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href='/contact'
            className='hover:text-gray-300'
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href='/projects'
            className='hover:text-gray-300'
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
