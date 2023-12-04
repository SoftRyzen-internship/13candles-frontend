'use client';

import { FC } from 'react';

import classnames from 'classnames';

import { ICounterProps } from './types';

import PlusIcon from '/public/icons/plus.svg';
import PlusSmIcon from '/public/icons/plus-sm.svg';
import MinusIcon from '/public/icons/minus.svg';
import MinusSmIcon from '@/public/icons/minus-sm.svg';

export const Counter: FC<ICounterProps> = ({
  className = '',
  caption,
  size,
  count,
  setCount,
  ariaMinus,
  ariaPlus,
}) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const counterClass = classnames(
    'border border-light flex items-center justify-between',
    { 'w-full min-w-[102px] h-[36px] p-1': !size },
    { 'w-full min-w-[84px] w-[max-content] h-[24px]': size == 'sm' },
  );
  const textClass = classnames(
    'text-light',
    { 'text-[24px]': !size },
    { 'text-[16px]': size == 'sm' },
  );

  return (
    <div className={`${className} inline-flex items-center`}>
      {caption && (
        <span
          className={`${textClass} whitespace-nowrap pr-[8px] font-semibold`}
        >
          {caption}:
        </span>
      )}

      <div className={counterClass}>
        <button
          className="disabled:text-gray"
          type="button"
          disabled={count <= 1}
          onClick={decrement}
          aria-label={ariaMinus}
        >
          {size == 'sm' ? (
            <MinusSmIcon width={24} height={24} />
          ) : (
            <MinusIcon width={24} height={24} />
          )}
        </button>

        <span className={textClass}>{count}</span>

        <button type="button" onClick={increment} aria-label={ariaPlus}>
          {size == 'sm' ? (
            <PlusSmIcon width={24} height={24} />
          ) : (
            <PlusIcon width={24} height={24} />
          )}
        </button>
      </div>
    </div>
  );
};
