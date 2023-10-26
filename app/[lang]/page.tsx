import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { HeroSection } from '@/sections/home/HeroSection';
import { CatalogSection } from '@/sections/home/CatalogSection';

import { ExampleSection } from '@/sections/home/ExampleSection';
import TranslationSwitcher from '@/components/TranslationSwitcher/TranslationSwitcher';
import { ContactList } from '@/components/ContactList';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { Button } from '@/components/ui/Button';
import { SideMenu } from '@/components/SideMenu';
import { Logo } from '@/components/ui/Logo';
import { Information } from '@/components/Information';
import { BasketButton } from '@/components/ui/BasketButton';

import { CATALOG } from '@/data';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    common,
    homepage,
    deliveryAndPayment,
    offerContract,
    rulesOfUse,
    warrantiesAndReturns,
  } = await getDictionary(lang);

  const { header, footer } = common;
  const { language, sidePanelMenu, nav, logoAriaLabelText, basketAriaLabel } =
    header;
  const { closePanelBtnAriaText, openPanelBtnAriaText } = sidePanelMenu;
  const { contacts, info, info_text, basketText } = footer;

  const { hero, catalog, about } = homepage;
  const { button } = about;

  const infoButtonsArr = [
    {
      text: info[0],
      data: offerContract,
    },
    {
      text: info[1],
      data: warrantiesAndReturns,
    },
    {
      text: info[2],
      data: deliveryAndPayment,
    },
    {
      text: info[3],
      data: rulesOfUse,
    },
  ];

  return (
    <main>
      <HeroSection {...hero} />
      <CatalogSection {...catalog} />

      <ExampleSection />

      {/* Examples using translations */}

      <div className="container mt-10 flex flex-col gap-10">
        <Information info={infoButtonsArr} info_text={info_text} />

        <BasketButton isIcon={true} ariaLabel={basketAriaLabel} />

        <BasketButton isIcon={false} text={basketText} />

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

        <div className="flex items-center justify-between">
          <SideMenu
            btnAriaClose={closePanelBtnAriaText}
            btnAriaOpen={openPanelBtnAriaText}
            links={nav}
          />
          <Logo aria={logoAriaLabelText} position="header" />
        </div>
      </div>

      <div id={CATALOG} className="w-74 h-74 mt-[500px]">
        Scroll test
      </div>
    </main>
  );
}
