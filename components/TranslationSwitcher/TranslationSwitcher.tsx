'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TranslationSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Link href={redirectedPathName(lang === 'Eng' ? 'uk' : 'en')}>
      <span className="link">{lang === 'Eng' ? 'Укр' : 'Eng'}</span>
    </Link>
  );
}
