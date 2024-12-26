import { projects } from '@/utils/constants';
import Card from '@/components/Card';

export default function Projects() {
  return (
    <div className='flex justify-center sm:my-8'>
      <div className='sm:w-2/3 flex flex-col justify-center '>
        {projects.map((project, index) => (
          <div key={index} className='mb-2'>
            <Card {...project} />
            <div className='w-full h-[0.5px] bg-[#4f4f4f]'></div>
          </div>
        ))}
      </div>
    </div>
  );
}
