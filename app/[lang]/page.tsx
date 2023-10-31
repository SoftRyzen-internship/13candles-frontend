import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { AboutSection } from '@/sections/home/AboutSection';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { HeroSection } from '@/sections/home/HeroSection';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta, metadataHome } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;
  const { title, description, keywords } = metadataHome;

  // TODO: delete path  when add .env.local
  const baseUrl =
    (process.env.NEXT_PUBLIC_BASE_URL as string) ||
    'https://13candles-frontend-git-fix-ogp-preview-softryzen.vercel.app';

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
    twitter: {
      ...twitter,
      images: [{ ...twitter.images[0], url: `${baseUrl}/meta/ogp-image.jpg` }],
    },
    openGraph: {
      ...openGraph,
      url: `${baseUrl}/${lang}`,
      images: [
        { ...openGraph.images[0], url: `${baseUrl}/meta/ogp-image.jpg` },
      ],
    },
    icons,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage } = await getDictionary(lang);
  const { hero, catalog, about } = homepage;

  return (
    <>
      <HeroSection hero={hero} />
      <CatalogSection catalog={catalog} />
      <AboutSection about={about} />
    </>
  );
}
