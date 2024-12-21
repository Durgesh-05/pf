import { dm_mono } from '@/utils/fonts';
import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Durgesh-05',
    logo: GithubLogo,
  },
  {
    name: 'X',
    url: 'https://x.com/d_dubey18',
    logo: XLogo,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/wsr_durgesh/',
    logo: InstagramLogo,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/durgesh-dubey18/',
    logo: LinkedinLogo,
  },
];

export default function Footer() {
  return (
    <>
      <footer className='mt-8 flex justify-around items-center text-[#757575] bottom-14 fixed left-0 right-0'>
        <div className={`text-lg ${dm_mono.className} `}>
          <p>Made with ❤️ by Me</p>
        </div>
        <ul className='flex gap-x-'>
          {socials.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block p-2 hover:bg-gray-300 rounded-full'
              >
                <social.logo size={32} />
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
