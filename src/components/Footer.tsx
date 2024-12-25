import { socials } from '@/utils/constants';
import { dm_mono } from '@/utils/fonts';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='flex flex-col sm:flex-row justify-around items-center text-[#757575] bottom-0 left-0 right-0  sm:py-8 sm:fixed'>
        <div className={`text-lg sm:text-xl ${dm_mono.className} `}>
          <p>Made with ❤️ by Me</p>
        </div>
        <ul className='flex'>
          {socials.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block p-2 hover:bg-gray-300 rounded-full'
              >
                <social.logo size={24} className='sm:h-[32px] sm:w-[32px]' />
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
