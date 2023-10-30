'use client';

import { redirectedPathName } from '@/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TranslationButtonProps } from './types';

export const TranslationSwitcher: React.FC<TranslationButtonProps> = ({
  lang,
  buttonText,
  className = '',
}) => {
  const pathName = usePathname();

  const btnClasses = classNames('link max-w-fit', className);

  return (
    <Link className={btnClasses} href={redirectedPathName(lang, pathName)}>
      {buttonText}
    </Link>
  );
};
