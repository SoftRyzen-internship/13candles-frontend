import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection, usefulWhom, ourManufactureSection } =
    businessPage;

  return (
    <main>
      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />
      <OurManufactureSection {...ourManufactureSection} />
    </main>
  );
}
