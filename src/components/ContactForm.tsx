'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from '@tabler/icons-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className='max-w-md w-full mx-auto rounded-2xl p-6 md:p-8 shadow-input bg-black border-[0.2px] border-gray-900'>
      <h2 className='font-bold text-xl text-neutral-200'>
        Welcome to Portfolio
      </h2>
      <p className='text-sm max-w-sm mt-2 text-neutral-300'>
        You can contact me regarding opportunity or freelance work. Thank you!
      </p>

      <form className='my-8' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <Label htmlFor='firstname'>First name</Label>
            <Input id='firstname' placeholder='Durgesh' type='text' />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input id='lastname' placeholder='Dubey' type='text' />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input id='email' placeholder='dragon18@pf.com' type='email' />
        </LabelInputContainer>

        <button
          className='bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        <div className='flex flex-col space-y-4'>
          <button
            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='submit'
          >
            <IconBrandGithub className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>
              <Link
                href={'https://github.com/Durgesh-05'}
                target='_blank'
                rel='noopener noreferrer'
                title=''
              >
                GitHub
              </Link>
            </span>
            <BottomGradient />
          </button>
          <button
            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='submit'
          >
            <IconBrandGoogle className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>
              <Link
                href={'https://x.com/d_dubey18'}
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </Link>
            </span>
            <BottomGradient />
          </button>
          <button
            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='submit'
          >
            <IconBrandOnlyfans className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>
              <Link
                href={'https://www.linkedin.com/in/durgesh-dubey18/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </Link>
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
