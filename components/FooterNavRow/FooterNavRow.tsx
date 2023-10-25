import React from 'react';
import Link from 'next/link';

import { FooterNavRowProps } from '@/components/FooterNavRow/types';
import { BasketButton } from '@/components/ui/BasketButton';
import { BusinessLink } from '@/components/ui/BusinessLink';

export const FooterNavRow: React.FC<FooterNavRowProps> = ({ data }) => {
  const { nav_text, nav, forBusinesBtnText, basketText } = data;

  return (
    nav?.length > 0 && (
      <div className="hidden xl:grid xl:gap-3 xl:text-[16px] xl:leading-5">
        <p className="xl:font-bold">{nav_text}</p>
        <ul className="xl:grid xl:gap-3">
          {nav.map(item => (
            <li key={item.href || item.name}>
              <Link className="link xl:font-medium" href={item.href || '#'}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <BasketButton
              className="xl:text-[16px] xl:font-medium xl:leading-5"
              text={basketText}
              isIcon={false}
            />
          </li>
          <li>
            <BusinessLink isIcon={false} text={forBusinesBtnText} />
          </li>
        </ul>
      </div>
    )
  );
};
