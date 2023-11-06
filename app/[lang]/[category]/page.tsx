import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { CatalogSection } from '@/sections/home/CatalogSection';
import { fetchAromas } from '@/api/api/fetchAromas';
import { fetchBanners } from '@/api/api/fetchBanners';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataHome } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataHome;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    manifest,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages,
    },
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}/${lang}` },
    icons,
  };
}

export default async function CategoryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);

  const aromas = await fetchAromas(lang);
  const banners = await fetchBanners();

  console.log('aromas', aromas);
  console.log('banners', banners);

  return (
    <>
      <CatalogSection catalog={homepage.catalog} />
    </>
  );
}
