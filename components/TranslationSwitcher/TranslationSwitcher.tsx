'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TranslationSwitcher: React.FC<{ lang: string }> = ({ lang }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Link
      href={redirectedPathName(lang === 'Eng' ? 'uk' : 'en')}
      className="link"
    >
      {lang === 'Eng' ? 'Укр' : 'Eng'}
    </Link>
  );
};
