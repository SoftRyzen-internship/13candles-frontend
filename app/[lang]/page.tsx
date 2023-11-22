import type { Locale } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';

import { AboutSection } from '@/sections/home/AboutSection';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { HeroSection } from '@/sections/home/HeroSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);
  const { hero, about } = homepage;

  return (
    <>
      <HeroSection hero={hero} lang={lang} />
      <CatalogSection lang={lang} isHomePage />
      <AboutSection about={about} />
    </>
  );
}
