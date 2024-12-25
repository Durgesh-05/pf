import { projects } from '@/utils/constants';
import Card from '@/components/Card';

export default function Projects() {
  return (
    <div className='w-full flex flex-col justify-center mb-8'>
      {projects.map((project, index) => (
        <div key={index} className='mb-2'>
          <Card {...project} />
          <div className='w-full h-[0.5px] bg-[#4f4f4f]'></div>
        </div>
      ))}
    </div>
  );
}
