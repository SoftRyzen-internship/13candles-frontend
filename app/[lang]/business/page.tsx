import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { FOR_BUSINESS } from '@/data';

import { HeroSection } from '@/sections/business/HeroSection';
import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';
import { ContactsSection } from '@/sections/business/ContactsSection';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataBusiness } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataBusiness;

  //TODO: delete localhost:3000
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/';

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    manifest,
    alternates: {
      canonical: `${baseUrl}${lang}${FOR_BUSINESS}`,
      languages,
    },
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}${lang}${FOR_BUSINESS}` },
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
    <main>
      <HeroSection {...hero} form={form} />
      <SecondSection {...secondSection} />
      <HelpfulSection {...helpfulSection} />
      <UsefulWhomSection {...usefulWhom} />
      <OurManufactureSection {...ourManufactureSection} />
      <ContactsSection {...contactsSection} form={form} />
    </main>
  );
}
