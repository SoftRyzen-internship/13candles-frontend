import Link from 'next/link';
import { ContactList } from '@/components/ContactList';
import { TranslationSwitcher } from '@/components/TranslationSwitcherButton';

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
      <button className="button md:w-fit" type="submit">
        button
      </button>
      <a className="button md:w-fit" href="./">
        link
      </a>
      <a className="link w-fit" href="./">
        Договір оферти
      </a>
      <Link href="/business" className="decor case">
        <span className="link">Для Бізнесу</span>
      </Link>
      <ContactList contacts={data.contacts} />
      <TranslationSwitcher />
    </div>
  </section>
);
