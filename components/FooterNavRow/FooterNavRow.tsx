'use client';
import React from 'react';
import Link from 'next/link';

import { checkPageName, smoothScroll } from '@/utils';
import { FooterNavRowProps } from '@/components/FooterNavRow/types';
import { BasketButton } from '@/components/ui/BasketButton';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { usePathname } from 'next/navigation';
import { FOR_BUSINESS } from '@/data';

export const FooterNavRow: React.FC<FooterNavRowProps> = ({
  data,
  dataOrder,
  form,
}: FooterNavRowProps) => {
  const { nav_text, nav, forBusinessBtnText, basketText } = data;

  const pathname = usePathname();
  const isBusinessPage = checkPageName(pathname, FOR_BUSINESS);

  return (
    nav?.length > 0 && (
      <div className="hidden xl:flex xl:flex-col xl:gap-3 xl:text-base">
        <p className="xl:font-bold">{nav_text}</p>
        <ul className="xl:grid xl:gap-3">
          {nav.map(item => (
            <li key={item.href || item.name}>
              <Link
                className="link xl:font-medium"
                href={item.href || '#'}
                onClick={e => smoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <BasketButton
              className="xl:text-base xl:font-medium"
              text={basketText}
              isIcon={false}
              data={dataOrder}
              form={form}
            />
          </li>
          <li>
            <BusinessLink
              className="xl:font-medium"
              isIcon={false}
              text={forBusinessBtnText}
              isAnchor={isBusinessPage ? true : false}
            />
          </li>
        </ul>
      </div>
    )
  );
};
