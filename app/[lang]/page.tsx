import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
// import { TranslationSwitcher } from '@/components/TranslationSwitcher';
import { HeroSection } from '@/sections/home/HeroSection';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { AboutSection } from '@/sections/home/AboutSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);

  // const { language } = header;
  const { hero, catalog, about } = homepage;

  return (
    <main>
      {/* <TranslationSwitcher lang={language} />
      <BusinessLink isIcon={true} text={header.forBusinesBtnText} /> */}
      <HeroSection {...hero} />
      <CatalogSection {...catalog} />
      <AboutSection about={about} />
    </main>
  );
}
