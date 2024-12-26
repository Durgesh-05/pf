export interface ICardProps {
  title: string;
  description: string;
  githubUrl: string;
  publicUrl: string;
  tags: string[];
}

export interface ITagProps {
  title: string;
  className?: string | undefined;
}
