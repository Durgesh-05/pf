export default function About() {
  return (
    <div className='sm:mt-16 my-8 flex justify-center items-center w-full text-center px-4 h-auto'>
      <div className='max-w-3xl text-[#868686] text-lg space-y-4'>
        <p>
          Hello! I’m <strong className='text-[#c2c2c2]'>Durgesh Dubey</strong>,
          a <span className='text-[#c2c2c2]'>3rd-year engineering student</span>{' '}
          with a passion for{' '}
          <strong className='text-[#c2c2c2]'>
            Full-Stack JavaScript development
          </strong>
          . My tech stack includes{' '}
          <span className='text-[#c2c2c2]'>
            React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind
            CSS, ShadCN, and Acertinty UI
          </span>
          .
        </p>

        <p>
          I also have experience in{' '}
          <strong className='text-[#c2c2c2]'>Docker, AWS, and DevOps</strong>. I
          can deploy backends on <span className='text-[#c2c2c2]'>EC2</span>,
          host frontends on <span className='text-[#c2c2c2]'>S3</span>, and
          distribute content via <span className='text-[#c2c2c2]'>CDN</span>.
          Additionally, I have worked with{' '}
          <span className='text-[#c2c2c2]'>Vercel and Netlify</span> for
          seamless deployments and domain setup.
        </p>

        <p>
          Currently, I&apos;m an{' '}
          <strong className='text-[#c2c2c2]'>
            intern at Tsecond Organisation
          </strong>{' '}
          and have gained experience in freelancing, helping businesses build
          scalable full-stack applications.
        </p>

        <p>Let&apos;s connect and build something amazing! 🚀</p>
      </div>
    </div>
  );
}
