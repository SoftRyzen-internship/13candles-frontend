'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { IDropDown } from './types';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';

export const AromaDropDown: React.FC<IDropDown> = ({
  setShownItem,
  shownItem,
  aromas,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleVisible = () => {
    setIsOpen(prev => !prev);
  };

  const closeAnOpenDropdown = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        isOpen &&
        !dropdownRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', closeAnOpenDropdown);
  }, [closeAnOpenDropdown]);

  const handleClick = (idx: number) => {
    setShownItem(idx);
    setIsOpen(false);
  };

  if (!aromas) {
    return;
  }

  return (
    <div
      ref={dropdownRef}
      className={`${className} border-light relative flex w-[max-content] min-w-[188px] flex-col border`}
    >
      <button
        type="button"
        onClick={toggleVisible}
        className="flex w-full items-center justify-between gap-[4px] px-[16px] py-[4px] text-base font-normal md:self-start"
      >
        <span>{aromas[shownItem].attributes.Title}</span>

        <IconArrowDown
          width={24}
          height={24}
          className={isOpen ? 'rotate-180' : ''}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-[40px] z-10 flex w-full flex-col bg-white shadow-dropdown">
          {aromas?.map(({ id, attributes: { Title } }, idx) => {
            const linkClassName = classNames(
              'w-full block truncate px-[16px] py-[12px] hover:bg-gray-light focus:bg-gray-light md:text-left text-base font-normal',
              { 'pointer-events-none bg-gray-light': idx === shownItem },
            );

            return (
              <li key={id}>
                <button
                  type="button"
                  className={linkClassName}
                  onClick={() => handleClick(idx)}
                  aria-disabled={idx === shownItem}
                >
                  {Title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
