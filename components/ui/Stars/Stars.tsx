'use client';

import { IStar } from './types';

import IconStar from '@/public/icons/icon_round-star.svg';

export const Stars: React.FC<IStar> = ({
  count,
  active,
  caption,
  className = '',
}) => {
  const starItems = new Array(count).fill('');

  return (
    <div className={`flex items-center ${className}`}>
      {starItems.map((_, idx) => (
        <IconStar
          key={caption + idx}
          className={idx < active ? 'fill-gold' : 'fill-gray'}
          width="24"
          height="24"
        />
      ))}

      <span className="text-light pl-[12px] font-semibold">{caption}</span>
    </div>
  );
};
