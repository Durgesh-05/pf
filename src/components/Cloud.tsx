import { IconCloud } from '@/components/ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'redux',
  'recoil',
  'mongodb',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
  'flask',
  'mern',
  'graphql',
  'tailwindcss',
  'circleci',
  'heroku',
  'nestjs',
  'webpack',
  'azure',
  'firebase',
  'vscode',
  'webpack',
  'jest',
  'cypress',
  'swagger',
];

export function Cloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className='relative flex size-full items-center justify-center overflow-hidden '>
      <IconCloud images={images} />
    </div>
  );
}
