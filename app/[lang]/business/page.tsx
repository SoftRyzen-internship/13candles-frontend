import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { FOR_BUSINESS } from '@/data';

import { SecondSection } from '@/sections/business/SecondSection';
import { HelpfulSection } from '@/sections/business/HelpfulSection';
import { OurManufactureSection } from '@/sections/business/OurManufactureSection';
import { UsefulWhomSection } from '@/sections/business/UsefulWhomSection';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataBusiness } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataBusiness;

  // TODO: delete path when add .env.local
  const baseUrl =
    (process.env.NEXT_PUBLIC_BASE_URL as string) ||
    'https://13candles-frontend.vercel.app';

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    manifest,
    alternates: {
      canonical: `${baseUrl}/${lang}${FOR_BUSINESS}`,
      languages,
    },
    keywords,
    twitter: {
      ...twitter,
      images: [{ ...twitter.images[0], url: `${baseUrl}/meta/ogp-image.jpg` }],
    },
    openGraph: {
      ...openGraph,
      url: `${baseUrl}/${lang}${FOR_BUSINESS}`,
      images: [
        { ...openGraph.images[0], url: `${baseUrl}/meta/ogp-image.jpg` },
      ],
    },
    icons,
  };
}

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
