'use client';

import { Locale } from '@/i18n.config';
import { redirectedPathName } from '@/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TranslationSwitcher = ({
  lang,
  buttonText,
  className = '',
}: {
  lang: Locale;
  buttonText: string;
  className: string;
}) => {
  const pathName = usePathname();

  const btnClasses = classNames('link max-w-fit', className);

  return (
    <Link className={btnClasses} href={redirectedPathName(lang, pathName)}>
      {buttonText}
    </Link>
  );
};
