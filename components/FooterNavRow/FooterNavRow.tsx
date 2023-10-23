import React from 'react';
import Link from 'next/link';
import { FooterNavRowProps } from '@/components/FooterNavRow/types';
// import { useTranslations } from 'next-intl';
export const footerNavData: FooterNavRowProps = {
  nav_text: 'Navigation',
  nav: [
    { name: 'Catalog', href: '/catalog' },
    { name: 'About us', href: '/about' },
    { name: 'Basket', href: '/basket' },
    { name: 'For Business', href: '/business' },
  ],
};
// const t = useTranslations('Home');

export const FooterNavRow: React.FC<FooterNavRowProps> = ({
  nav_text,
  nav,
}) => {
  return (
    <div className=" hidden xl:grid xl:gap-3 xl:text-[16px] xl:leading-5">
      <p className="xl:font-bold ">{nav_text}</p>
      {/* <p className="xl:font-bold ">{t('nav_text')}</p> */}
      <ul className="xl:grid xl:gap-3">
        {nav.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              {/* <Link href={t('item.href')}> */}
              <span className="link  xl:font-medium ">{item.name}</span>
              {/* <span className="link  xl:font-medium ">{t('item.name')}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
