'use client';

import { CategoriesDropdownProps } from './types';

import { useCallback, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import IconArrowDown from '/public/icons/icon_arrow-down.svg';

export const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  lang,
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

  const cutBrackets = (title: string) => {
    return title.includes('(') ? title.slice(0, title.indexOf('(')) : title;
  };

  const label = lang === 'en' ? 'Categories' : 'Категорії';

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-col items-center text-lg font-medium uppercase text-[#171717] smOnly:w-full"
    >
      <button
        type="button"
        onClick={toggleVisible}
        className="flex items-center  justify-center gap-[12px] md:self-start"
      >
        <span className="uppercase">{label}</span>
        <IconArrowDown
          width={24}
          height={24}
          //   className={isOpen ? 'rotate-180' : ''}
        />
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-[40px] z-10 flex flex-col bg-white shadow-dropdown smOnly:w-full">
          {categories?.map(({ id, attributes: { title, slug } }) => (
            <li key={id}>
              <Link
                href={`/${lang}/${slug}`}
                className={`block px-[16px] py-[12px] text-center hover:bg-[#EBEBEB] focus:bg-[#EBEBEB] md:text-left ${
                  currentCategory === slug && 'pointer-events-none bg-[#EBEBEB]'
                }`}
                aria-disabled={currentCategory === slug}
              >
                {cutBrackets(title)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
