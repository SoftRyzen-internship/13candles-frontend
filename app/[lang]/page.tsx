import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { ContactList } from '@/components/ContactList';
import { BusinessLink } from '@/components/ui/BusinessLink';
import { Button } from '@/components/ui/Button';

import { CatalogSection } from '@/sections/home/CatalogSection';

import { SocialsMenu } from '@/components/SocialsMenu';
// import { ExampleSection } from '@/sections/home/ExampleSection';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { CATALOG } from '@/data';
import { HeroSection } from '@/sections/home/HeroSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { common, homepage } = await getDictionary(lang);

  const { header, footer } = common;
  const { contacts, social, social_text } = footer;
  const { hero, catalog, about } = homepage;
  const { button } = about;

  return (
    <>
      <HeroSection {...hero} />
      <CatalogSection {...catalog} />

      {/* <ExampleSection /> */}

      {/* Examples using translations */}

      <div className="container mt-10 flex flex-col gap-10">
        <TranslationSwitcher
          lang={lang}
          buttonText={header.languageButtonText}
        />

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
    </>
  );
}
