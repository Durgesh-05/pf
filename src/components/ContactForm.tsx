'use client';
import React, { ChangeEvent, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { IFormInput } from '@/utils/type';

export default function ContactForm() {
  const [formInput, setFormInput] = useState<IFormInput>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormInput((prevInput: IFormInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (Object.values(formInput).some((value) => value.trim() === '')) {
      setLoading(false);
      toast.error('Please fill all the details', { position: 'bottom-right' });
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formInput.firstName.concat(' ', formInput.lastName),
          email: formInput.email,
          message: formInput.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      toast.success('Email sent successfully', { position: 'bottom-right' });
      setFormInput({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Error sending email', { position: 'bottom-right' });
    } finally {
      setLoading(false);
      console.log('Form submitted');
    }
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
            <Input
              id='firstname'
              name='firstName'
              value={formInput.firstName}
              placeholder='Durgesh'
              type='text'
              onChange={(e) => onFormChange(e)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor='lastname'>Last name</Label>
            <Input
              id='lastname'
              name='lastName'
              value={formInput.lastName}
              placeholder='Dubey'
              type='text'
              onChange={(e) => onFormChange(e)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            id='email'
            name='email'
            value={formInput.email}
            placeholder='dragon18@pf.com'
            type='email'
            onChange={(e) => onFormChange(e)}
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Message</Label>
          <Input
            id='message'
            name='message'
            value={formInput.message}
            placeholder='Hey there! Need help'
            type='text'
            onChange={(e) => onFormChange(e)}
          />
        </LabelInputContainer>

        <button
          className='bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          disabled={loading}
        >
          {loading ? 'Sending...' : <>Send &rarr;</>}
          <BottomGradient />
        </button>
      </form>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full' />

      <div className='flex flex-col space-y-4'>
        <Link
          href={'https://github.com/Durgesh-05'}
          target='_blank'
          rel='noopener noreferrer'
          title=''
        >
          <button className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'>
            <IconBrandGithub className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>Github</span>
            <BottomGradient />
          </button>
        </Link>
        <Link
          href={'https://x.com/d_dubey18'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'>
            <IconBrandTwitter className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>Twitter</span>
            <BottomGradient />
          </button>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/durgesh-dubey18/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]'>
            <IconBrandLinkedin className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>Linkedin</span>
            <BottomGradient />
          </button>
        </Link>
      </div>
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
