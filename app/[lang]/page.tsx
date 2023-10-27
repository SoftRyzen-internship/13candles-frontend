import { AboutSection } from '@/sections/home/AboutSection';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { HeroSection } from '@/sections/home/HeroSection';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);
  const { hero, catalog, about } = homepage;

  return (
    <main>
      <HeroSection hero={hero} />
      <CatalogSection catalog={catalog} />
      <AboutSection about={about} />
    </main>
  );
}
