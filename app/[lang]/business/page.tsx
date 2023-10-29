import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection, ourManufactureSection } = businessPage;

  return (
    <main>
      <SecondSection className="section xl:py-[50px]" {...secondSection} />
      <HelpfulSection className="section xl:py-[50px]" {...helpfulSection} />
      <OurManufactureSection staticData={ourManufactureSection} />
    </main>
  );
}
