import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const { secondSection } = businessPage;

  return (
    <main>
      <SecondSection className="section xl:py-[50px]" {...secondSection} />
    </main>
  );
}
