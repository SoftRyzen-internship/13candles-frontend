import type { Metadata } from 'next';

import { CatalogSection } from '@/sections/home/CatalogSection';

import { getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { CardSection } from '@/sections/product/CardSection';

export const dynamicParams = false;

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

export default async function ProductPage({
  params: { lang, category, product },
}: {
  params: { lang: Locale; category: string; product: string };
}) {
  return (
    <>
      <CardSection lang={lang} category={category} product={product} />
      <CatalogSection lang={lang} />
    </>
  );
}
