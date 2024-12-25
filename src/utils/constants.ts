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
    description: 'Ecommerce Website',
    githubUrl: 'https://github.com/Durgesh-05/Gadget-Galaxy',
    publicUrl: 'gadget-galaxy-psi.vercel.app/',
    tags: ['#React.', '#Node.', '#Express.', '#MongoDB.'],
  },
  {
    title: 'Medium Clone',
    description: 'Blog Website',
    githubUrl: 'https://github.com/Durgesh-05/turbo-octo-spoon',
    publicUrl: 'turbo-octo-spoon-two.vercel.app/',
    tags: [
      '#React.',
      '#Hono.',
      '#Postgres.',
      '#Typescript.',
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
    description: 'Modern Landing Page',
    githubUrl: 'https://github.com/Durgesh-05/tailwind_css',
    publicUrl: 'https://tailwind-css-lovat-kappa.vercel.app/',
    tags: ['#HTML.', '#Javascript.', '#Tailwind.'],
  },
];
