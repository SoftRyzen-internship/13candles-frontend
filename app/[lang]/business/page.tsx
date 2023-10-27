import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection, usefulWhom } = businessPage;

  return (
    <main>
      <SecondSection className="section xl:py-[50px]" {...secondSection} />
      <HelpfulSection className="section xl:py-[50px]" {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />
    </main>
  );
}
