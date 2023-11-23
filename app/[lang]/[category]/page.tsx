import type { Metadata } from 'next';

import { ProductsSection } from '@/sections/category/ProductsSection';

import { createMetadata } from '@/utils';
import { getDictionary } from '@/lib/dictionary';
import { fetchSlugs } from '@/api/fetchSlugs';
import { fetchProducts } from '@/api/fetchProducts';
import { fetchCategories } from '@/api/fetchCategories';

import type { Locale } from '@/i18n.config';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateMetadata({
  params: { lang, category },
}: {
  params: { lang: Locale; category: string };
}): Promise<Metadata> {
  const metadata = await createMetadata({ lang, category, page: 'category' });
  return metadata;
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
