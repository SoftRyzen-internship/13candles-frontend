import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { CateryCardProps } from './types';

export const CategoryCard: React.FC<CateryCardProps> = ({
  category: { href, text, className, image },
}) => {
  const cardClasses = classNames('zoom block', className);

  return (
    <Link href={href} className={cardClasses}>
      <div className="relative mb-3 h-[calc((100vw-(20px*2)-16px)/2)] overflow-hidden sm:h-[212px] md:h-[256px] xl:mb-5 xl:h-[224px]">
        <Image
          className="zoom-image h-full w-full object-cover object-center"
          src={image.src}
          alt={image.alt}
          width={224}
          height={256}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 17vw"
        />
      </div>
      <p className="text-center font-medium">{text}</p>
    </Link>
  );
};
