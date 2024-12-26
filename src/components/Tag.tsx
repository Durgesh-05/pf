import { inter } from '@/utils/fonts';
import { ITagProps } from '@/utils/type';

export const Tag = ({ title, className }: ITagProps) => {
  return (
    <div
      className={`bg-[#484848] border border-[#737373] sm:px-2 sm:py-2 sm:text-lg px-1 py-1 text-xs text-[#ECECEC] rounded-lg flex justify-center items-center w-fit font-medium sm:font-bold ${inter.className} ${className}`}
    >
      <p>{title}</p>
    </div>
  );
};
