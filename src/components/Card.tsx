import { dm_mono } from '@/utils/fonts';
import { Tag } from './Tag';
import Link from 'next/link';
import { ICardProps } from '@/utils/type';
import { Link as PublicLink, GithubLogo } from '@phosphor-icons/react/dist/ssr';

export default function Card({
  title,
  description,
  githubUrl,
  publicUrl,
  tags,
}: ICardProps) {
  return (
    <div className='my-4 flex flex-col space-y-2'>
      <div className='flex gap-2'>
        <h4
          className={`text-[#868686] text-xl font-semibold ${dm_mono.className}`}
        >
          {title}
        </h4>
        <div className='flex justify-center items-center gap-2'>
          <Link
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block rounded-full'
          >
            <GithubLogo size={16} className='sm:h-[32px] sm:w-[32px]' />
          </Link>
          <Link
            href={publicUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block rounded-full'
          >
            <PublicLink size={16} className='sm:h-[32px] sm:w-[32px]' />
          </Link>
        </div>
      </div>
      <p className='text-[#868686] text-sm '>{description}</p>
      <div className='flex flex-wrap items-center gap-2'>
        {tags.map((tag, index) => (
          <Tag title={tag} key={index} />
        ))}
      </div>
    </div>
  );
}
