import type { Metadata } from 'next';

import { getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { fetchSlugs } from '@/api/api/fetchSlugs';

// import { CatalogSection } from '@/sections/home/CatalogSection';
// import { fetchAromas } from '@/api/api/fetchAromas';

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

export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const categoriesData = await fetchSlugs();

  const staticParams = categoriesData?.map(category => {
    return { lang: lang, category: category.slug };
  });

  return staticParams;
}

export default async function CategoryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { homepage: catalog } = await getDictionary(lang);

  // const aromas = await fetchAromas(lang);
  // console.log(aromas);

  return (
    <>
      <p>Category page. Мова {lang}</p>
    </>
  );
}
