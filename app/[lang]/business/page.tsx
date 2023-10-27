import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { HeroSection } from '@/sections/business/HeroSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);

  return (
    <main>
      <HeroSection {...businessPage.hero} />
    </main>
  );
}
