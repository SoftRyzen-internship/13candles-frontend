'use client';

import { Locale } from '@/i18n.config';
import { redirectedPathName } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TranslationSwitcher = ({
  lang,
  buttonText,
}: {
  lang: Locale;
  buttonText: string;
}) => {
  const pathName = usePathname();

  return (
    <Link className="link max-w-fit" href={redirectedPathName(lang, pathName)}>
      {buttonText}
    </Link>
  );
};
