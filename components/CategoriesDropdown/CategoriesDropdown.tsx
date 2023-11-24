'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { cutBrackets } from '@/utils';

import { CategoriesDropdownProps } from './types';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';

export const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  lang,
  label,
  categories,
  currentCategory,
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

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-col items-center text-lg font-medium uppercase smOnly:w-full smOnly:gap-4"
    >
      <button
        type="button"
        onClick={toggleVisible}
        className="flex items-center justify-center gap-[12px] md:self-start"
      >
        <span className="uppercase">{label}</span>
        <IconArrowDown
          width={24}
          height={24}
          className={isOpen ? 'rotate-180' : ''}
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-[40px] z-10 flex flex-col bg-white shadow-dropdown smOnly:w-full">
          {categories?.map(({ id, attributes: { title, slug } }) => {
            const linkClassName = classNames(
              'block truncate px-[16px] py-[12px] text-center hover:bg-gray-light focus:bg-gray-light md:text-left',
              { 'pointer-events-none bg-gray-light': currentCategory === slug },
            );

            return (
              <li key={id}>
                <Link
                  href={`/${lang}/${slug}`}
                  className={linkClassName}
                  aria-disabled={currentCategory === slug}
                >
                  {cutBrackets(title)}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
