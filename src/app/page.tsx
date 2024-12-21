import Image from 'next/image';
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';
import { inter } from '@/utils/fonts';
import { Card } from '@/components/Card';

const landingTexts = [
  { title: '#FullstackDev.' },
  { title: '#Web3Enthusiast.' },
  { title: '#Grinding.' },
  { title: '#Freelancer.' },
  { title: '#AnimeFan.' },
  { title: '#19.' },
];

export default function Home() {
  return (
    <>
      <div className='h-screen max-w-full px-8 py-4'>
        <Appbar />
        <main className=' w-fit flex flex-col-reverse justify-center items-center sm:flex-row sm:justify-evenly  sm:w-full '>
          <div className={`${inter.className} sm:mb-28`}>
            <div
              className={`text-7xl text-center  text-transparent bg-clip-text  bg-gradient-to-bl from-[#000000] to-[#666666] sm:bg-gradient-to-bl sm:from-[#000000] sm:to-[#666666] mb-6 `}
              style={{ lineHeight: '1.2' }}
            >
              Durgesh Dubey
            </div>
            <div
              id='cards'
              className='grid grid-cols-3 gap-y-4 gap-x-12 place-items-center mb-10 sm:gap-x-2'
            >
              {landingTexts.slice(0, 3).map((text, index) => (
                <Card title={text.title} key={index} />
              ))}
              <div className='col-span-3 grid grid-cols-3 sm:gap-x-8 gap-x-4 ml-2'>
                {landingTexts.slice(3).map((text, index) => (
                  <Card title={text.title} key={index} />
                ))}
              </div>
            </div>
          </div>

          <Image
            src='/sung-woo.jpeg'
            alt='Anime-Image'
            width={400}
            height={400}
            priority={true}
            className='sm:h-[700px] sm:w-[700px]'
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
