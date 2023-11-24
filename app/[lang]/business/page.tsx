import type { Metadata } from 'next';

import { HeroSection } from '@/sections/business/HeroSection';
import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';
import { ContactsSection } from '@/sections/business/ContactsSection';

import { getDictionary, getMetadata } from '@/lib/dictionary';

import { BASE_URL } from '../layout';
import { FOR_BUSINESS } from '@/data';

import type { Locale } from '@/i18n.config';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataBusiness } = await getMetadata(lang);

  const { openGraph, icons, languages } = meta;
  const { title, description, keywords } = metadataBusiness;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}${FOR_BUSINESS}`,
      languages,
    },
    keywords,
    openGraph: { ...openGraph, url: `${BASE_URL}/${lang}${FOR_BUSINESS}` },
    icons,
  };
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
    <>
      <HeroSection {...hero} form={form} />
      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />
      <OurManufactureSection {...ourManufactureSection} />
      <ContactsSection {...contactsSection} form={form} lang={lang} />
    </>
  );
}
