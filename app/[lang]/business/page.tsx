// 'use client';

// import { usePathname } from 'next/navigation';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const path = usePathname();

  const { businessPage } = await getDictionary(lang);
  const { secondSection, helpfulSection } = businessPage;

  return (
    <main>
      {/* <Link href={`${path}/5`}>ToCard</Link> */}
      <SecondSection className="section xl:py-[50px]" {...secondSection} />
      <HelpfulSection className="section xl:py-[50px]" {...helpfulSection} />
    </main>
  );
}
