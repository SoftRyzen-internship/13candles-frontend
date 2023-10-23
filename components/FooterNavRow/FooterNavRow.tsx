import React from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { TranslationsType } from '@/components/FooterNavRow/types';
import data from '@/data/footer.json';

export const FooterNavRow: React.FC = () => {
  const footerNavData = useTranslations(data.footer);

  const navText = footerNavData(data.nav_text);
  const nav = footerNavData.raw(data.nav) as TranslationsType['nav'];

  if (!nav || !Array.isArray(nav)) {
    return null;
  }

  return (
    <div className="hidden xl:grid xl:gap-3 xl:text-[16px] xl:leading-5">
      <p className="xl:font-bold">{navText}</p>
      <ul className="xl:grid xl:gap-3">
        {nav.map(item => (
          <li key={item.href || item.name}>
            <Link href={item.href || '#'}>
              <span className="link xl:font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
