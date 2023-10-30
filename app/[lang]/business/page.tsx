import type { Metadata } from 'next';

import { getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { FOR_BUSINESS } from '@/data';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataBusiness } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataBusiness;

  //TODO: delete localhost:3000 / create .env.local
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000/';

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

export default function BusinessPage() {
  return (
    <div className="container smOnly:pt-[108px]">
      <h1>This is a business page</h1>
    </div>
  );
}
