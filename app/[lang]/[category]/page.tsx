import type { Metadata } from 'next';

import { ProductsSection } from '@/sections/category/ProductsSection';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { fetchSlugs } from '@/api/fetchSlugs';
import { fetchProducts } from '@/api/fetchProducts';
import { fetchCategories } from '@/api/fetchCategories';

import { Locale } from '@/i18n.config';

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
  const categoriesData = await fetchSlugs(lang);

  const staticParams = categoriesData?.map(category => {
    return { lang: lang, category: category.slug };
  });

  console.log(staticParams);

  return staticParams;
}

export default async function CategoryPage({
  params: { lang, category },
}: {
  params: { lang: Locale; category: string };
}) {
  const staticDictionary = await getDictionary(lang);

  const products = await fetchProducts(lang, category);

  const categories = await fetchCategories(lang);

  return (
    <>
      <ProductsSection
        lang={lang}
        category={category}
        categories={categories}
        staticData={staticDictionary.category}
        products={products}
      />
    </>
  );
}
