import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { ContactList } from '@/components/ContactList';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { Button } from '@/components/ui/Button';
import { SideMenu } from '@/components/SideMenu';
import { Logo } from '@/components/ui/Logo';

import { CatalogSection } from '@/sections/home/CatalogSection';

import { SocialsMenu } from '@/components/SocialsMenu';
// import { ExampleSection } from '@/sections/home/ExampleSection';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { MobileMenu } from '@/components/MobileMenu';
import { CATALOG } from '@/data';
import { HeroSection } from '@/sections/home/HeroSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { common, homepage } = await getDictionary(lang);

  const { header, footer } = common;
  const { language, sidePanelMenu, nav, logoAriaLabelText, mobileMenu } =
    header;
  const { closePanelBtnAriaText, openPanelBtnAriaText } = sidePanelMenu;
  const { contacts, social, social_text } = footer;

  const { hero, catalog, about } = homepage;
  const { button } = about;

  return (
    <main>
      <div className="container flex items-center justify-between bg-body pb-4 pt-9 smOnly:fixed smOnly:left-0 smOnly:top-0 smOnly:z-10 ">
        <SideMenu
          btnAriaClose={closePanelBtnAriaText}
          btnAriaOpen={openPanelBtnAriaText}
          links={nav}
        />

        <MobileMenu
          links={nav}
          isHomePage={true}
          btnAriaClose={mobileMenu.closeMenuBtnAriaText}
          btnAriaOpen={mobileMenu.openMenuBtnAriaText}
          businessText={header.forBusinesBtnText}
        />
        <Logo aria={logoAriaLabelText} position="header" />
      </div>

      <HeroSection {...hero} />
      <CatalogSection {...catalog} />

      {/* <ExampleSection /> */}

      {/* Examples using translations */}

      <div className="container mt-10 flex flex-col gap-10">
        <TranslationSwitcher lang={language} />

        <ContactList contacts={contacts} className="font-montserrat" />

        <BusinessLink isIcon={true} text={header.forBusinesBtnText} />
        <BusinessLink
          className="text-lg"
          isIcon={true}
          text={header.forBusinesBtnText}
        />
        <BusinessLink isIcon={false} text={footer.forBusinesBtnText} />

        <Button
          className="m-10 max-w-[280px] md:max-w-[172px]"
          tag="a"
          label={button}
          href={CATALOG}
        />
        <SocialsMenu socials={social} title={social_text} />
      </div>

      <div id={CATALOG} className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
    </main>
  );
}
