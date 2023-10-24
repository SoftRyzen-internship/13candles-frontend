import { ContactList } from '@/components/ContactList';
import { SideMenu } from '@/components/SideMenu';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export const ExampleSection = () => (
  <section className="section xl:pb-12 xl:pt-10">
    <div className="container flex items-center justify-between">
      <SideMenu
        btnAriaClose="menu open"
        btnAriaOpen="menu close"
        links={[
          {
            name: 'Catalog',
            href: '/catalog',
          },
          {
            name: 'About Us',
            href: '/about',
          },
        ]}
      />
      <Logo aria="logo" position="header" />
    </div>
    <div className="container">
      <div className="mb-10 flex flex-col gap-5">
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
      </div>
      <a className="link w-fit" href="./">
        Договір оферти
      </a>
      <Button
        className="m-10 max-w-[280px] md:max-w-[172px]"
        tag="a"
        label="Каталог"
        href="catalog"
      />
      <div id="catalog" className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
      <a className="link" href="./">
        link with underline
      </a>

      <ContactList />
    </div>
  </section>
);
