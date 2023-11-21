import { ShowMoreButtonProps } from './types';

export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="common-transition w-full self-center border-[1px] border-transparent bg-black-light py-3 text-center text-lg font-medium text-white hover:border-black-light hover:bg-white hover:text-black-light focus:border-black-light focus:bg-white focus:text-black-light md:w-[218px] smOnly:max-w-[280px]"
    >
      {label}
    </button>
  );
};
