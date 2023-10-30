import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection } = businessPage;

  return (
    <main>
      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
    </main>
  );
}
