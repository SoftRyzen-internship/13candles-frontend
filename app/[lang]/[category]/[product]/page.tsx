import type { Metadata } from 'next';

import { CardSection } from '@/sections/product/CardSection';
import { CatalogSection } from '@/sections/home/CatalogSection';

import { createMetadata } from '@/utils';
import { fetchProducts } from '@/api/fetchProducts';

import type { Locale } from '@/i18n.config';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateMetadata({
  params: { lang, category, product },
}: {
  params: { lang: Locale; category: string; product: string };
}): Promise<Metadata> {
  const metadata = await createMetadata({
    lang,
    category,
    product,
    page: 'product',
  });
  return metadata;
}

export async function generateStaticParams({
  params: { lang, category },
}: {
  params: { lang: Locale; category: string; product: string };
}): Promise<Array<{ lang: Locale; category: string; product: string }>> {
  const productsData = await fetchProducts(lang, category);

  const staticParams =
    productsData?.map(product => {
      return {
        lang: lang,
        category: category,
        product: product.attributes.slug,
      };
    }) || [];

  return staticParams;
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
