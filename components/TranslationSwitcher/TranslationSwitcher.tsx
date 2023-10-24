'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

export default function TranslationSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    // console.log(segments);
    // if (segments[1] === 'uk') return segments[0];
    return segments.join('/');
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
