import Link from 'next/link';

import BusinessIcon from '@/public/icons/icon_businesscase.svg';

// import { Information } from '@/components/Information';
import { BasketButton } from '@/components/ui/BasketButton';
import { ContactList } from '@/components/ContactList';
import { SideMenu } from '@/components/SideMenu';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

// import dataFooter from '@/dictionaries/uk/common.json';
// const {
//   footer: { info, info_text },
// } = dataFooter;

const data = {
  contacts: [
    {
      href: 'tel:380634293499',
      icon: 'phone',
      text: '38 (063) 429 34 99',
    },
    {
      href: 'mailto:13candlebar@gmail.com',
      icon: 'email',
      text: '13candlebar@gmail.com',
    },
  ],
  sidemenu: [
    {
      name: 'Catalog',
      href: '/catalog',
    },
    {
      name: 'About Us',
      href: '/about',
    },
  ],
  button: {
    text: 'Каталог',
    href: 'catalog',
  },
};

export const ExampleSection = () => (
  <section className="section xl:pb-12 xl:pt-10">
    <div className="container flex flex-col gap-5">
      <h1 className="visually-hidden">I am a visually hidden heading</h1>
      <h2 className="title-lg">title-lg - e.g. Договір оферти</h2>
      <h2 className="title-md">title-md - e.g. Загальні положення</h2>
      <h2 className="title-sm">title-sm - e.g. Навігація</h2>
      <h2 className="section-title-primary">
        section-title-primary - e.g. Каталог
      </h2>
      <h2 className="section-title-secondary">
        section-title-secondary - e.g. Ми можемо бути корисними
      </h2>
      <div className="flex items-center justify-between">
        <SideMenu
          btnAriaClose="menu open"
          btnAriaOpen="menu close"
          links={data.sidemenu}
        />
        <Logo aria="logo" position="header" />
      </div>
      <a className="link w-fit" href="./">
        Договір оферти
      </a>
      <Button
        className="m-10 max-w-[280px] md:max-w-[172px]"
        tag="a"
        label={data.button.text}
        href={data.button.href}
      />
      <ContactList contacts={data.contacts} />
      <div id="catalog" className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
      <a className="link" href="./">
        link with underline
      </a>
      <Link href="./" className="flex w-fit items-center justify-center gap-2">
        <BusinessIcon width="24" height="24" />
        <span className="link">Для Бізнесу</span>
      </Link>

      {/* <Information info={info} info_text={info_text} /> */}

      <BasketButton />
    </div>
  </section>
);
