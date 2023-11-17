import type { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

import { fetchSlugs } from '@/api/fetchSlugs';
import { fetchProducts } from '@/api/fetchProducts';
// import Link from 'next/link';
import ProductsList from '@/components/ProductsList/ProductsList';
// import { fetchCategories } from '@/api/api/fetchCategories';

// import { CatalogSection } from '@/sections/home/CatalogSection';
// import { fetchAromas } from '@/api/api/fetchAromas';

import { CategoriesDropdown } from '@/components/CategoriesDropdown';
import { fetchCategories } from '@/api/fetchCategories';

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
      <section className="section smOnly:pt-[120px]">
        <div className="container">
          <p className="mb-6">
            Category page. Мова {lang}. Категорія {category}
          </p>

          <CategoriesDropdown
            lang={lang}
            label={staticDictionary.category.dropdown.label}
            categories={categories}
            currentCategory={category}
          />

          <div className="my-[16px]  md:my-[32px]">
            <p className="mb-4">Products: </p>
            {products && (
              <ProductsList
                products={products}
                lang={lang}
                category={category}
              />
            )}
          </div>

          {/* <div className="py-[16px] md:py-[32px]">
            <p className="mb-4">Products: </p>
            <ul>
              {products?.map(({ id, attributes: { title, slug } }) => {
                return (
                  <li key={id}>
                    <Link href={`${lang}/${category}/${slug}`}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
}
