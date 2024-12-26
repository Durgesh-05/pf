import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from '@phosphor-icons/react/dist/ssr';
import { ICardProps } from './type';

export const socials = [
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

export const projects: ICardProps[] = [
  {
    title: 'Gadget-Galaxy',
    description:
      'Modern E-commerce website with a simple design, secured payment gateway and user authentication.',
    githubUrl: 'https://github.com/Durgesh-05/Gadget-Galaxy',
    publicUrl: 'https://gadget-galaxy-psi.vercel.app/',
    tags: [
      '#ReactJS.',
      '#NodeJS.',
      '#ExpressJS.',
      '#MongoDB.',
      '#Tailwind.',
      '#Stripe.',
    ],
  },
  {
    title: 'Medium Clone',
    description:
      'Medium Clone built using HonoJS and deployed on cloudflare workers',
    githubUrl: 'https://github.com/Durgesh-05/turbo-octo-spoon',
    publicUrl: 'https://turbo-octo-spoon-two.vercel.app/',
    tags: [
      '#ReactJS.',
      '#HonoJS.',
      '#PostgreSQL.',
      '#Typescript.',
      '#Tailwind.',
      '#Cloudflare Workers.',
    ],
  },
  {
    title: 'MusicUI',
    description: 'Simple Landing Page built using Nextjs & Acertinity UI',
    githubUrl: 'https://github.com/Durgesh-05/next-music',
    publicUrl: 'https://next-music-colv.vercel.app/',
    tags: ['#NextJS.', '#AcertinityUI.', '#TypeScript.', '#Tailwind.'],
  },
  {
    title: 'ToDesktop',
    description: 'Modern Landing Page with modern designs and animations',
    githubUrl: 'https://github.com/Durgesh-05/tailwind_css',
    publicUrl: 'https://tailwind-css-lovat-kappa.vercel.app/',
    tags: ['#HTML.', '#Javascript.', '#Tailwind.'],
  },
];
