import type { Metadata } from 'next';
import type { Locale } from '@/i18n.config';

import { HeroSection } from '@/sections/business/HeroSection';
import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';
import { ContactsSection } from '@/sections/business/ContactsSection';

import { getDictionary } from '@/lib/dictionary';
import { createMetadata } from '@/utils';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const metadata = await createMetadata({ lang, page: 'business' });
  return metadata;
}

export default async function BusinessPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { businessPage } = await getDictionary(lang);
  const {
    hero,
    secondSection,
    helpfulSection,
    usefulWhom,
    ourManufactureSection,
    contactsSection,
    form,
  } = businessPage;

  return (
    <main>
      <HeroSection {...hero} form={form} />
      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />
      <OurManufactureSection {...ourManufactureSection} />
      <ContactsSection {...contactsSection} form={form} lang={lang} />
    </main>
  );
}
