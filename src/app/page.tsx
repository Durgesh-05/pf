import Image from 'next/image';
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';
import { inter } from '@/utils/fonts';

export default function Home() {
  return (
    <>
      <Appbar />
      <main className='max-w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly  '>
        <div className='flex items-end justify-center '>
          <div
            className={`text-7xl ${inter.className} text-left bg-clip-text text-transparent bg-gradient-to-b from-[#000000] to-[#666666] py-2 max-w-full`}
          >
            Durgesh Dubey
          </div>
        </div>

        <Image
          src='/sung-woo.jpeg'
          alt='Anime-Image'
          width={400}
          height={400}
          priority={true}
          className='md:h-[600px] md:w-[600px]'
        />
      </main>
      <Footer />
    </>
  );
}
