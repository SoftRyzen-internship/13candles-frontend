import React from 'react';

import Link from 'next/link';

import { FooterNavRowProps } from '@/components/FooterNavRow/types';

export const FooterNavRow: React.FC<FooterNavRowProps> = ({ data }) => {
  const navText = data.nav_text;
  const nav = data.nav;

  if (!nav || !Array.isArray(nav)) {
    return null;
  }

  return (
    <div className="hidden xl:grid xl:gap-3 xl:text-[16px] xl:leading-5">
      <p className="xl:font-bold">{navText}</p>
      <ul className="xl:grid xl:gap-3">
        {nav.map(item => (
          <li key={item.href || item.name}>
            <Link className="link xl:font-medium" href={item.href || '#'}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
