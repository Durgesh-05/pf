import Link from 'next/link';
import { useState } from 'react';
import { dm_mono } from '@/utils/fonts';

export default function Appbar() {
  return (
    <div
      className={`mt-8 text-xl ${dm_mono.className} flex justify-around items-center gap-5 text-[#868686]`}
    >
      <div>
        <Link href='/'>0xDragon</Link>
      </div>
      <div className='flex gap-x-16'>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='projects'>Projects</Link>
      </div>
      <div>
        <p>Avatar</p>
      </div>
    </div>
  );
}
