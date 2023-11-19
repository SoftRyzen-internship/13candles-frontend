import type { Metadata } from 'next';
// import Image from 'next/image';

import { FakeProductCard } from '@/components/ui/AddToCartBtn/FakeProductCard';
import { ProductSlider } from '@/components/ProductSlider';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import { fetchProducts } from '@/api/fetchProducts';
import { fetchOneProduct } from '@/api/fetchOneProduct';

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
  const productData = await fetchOneProduct(lang, category, product);
  const {
    common: { orderModal },
  } = await getDictionary(lang);

  return (
    <>
      <div className="container">
        <p className="smOnly:pt-[200px]">
          Product page. Мова {lang}. Категорія {category}.
        </p>

        {productData && productData.length > 0 ? (
          <>
            {productData.map(
              ({
                attributes: {
                  title,
                  // price,
                  // description,
                  // capacity,
                  // main_image,
                  images,
                },
              }) => (
                <div key={title} className="pb-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-3">
                    <ProductSlider images={images} />

                    <FakeProductCard
                      dataOrder={orderModal}
                      product={productData[0]}
                    />
                  </div>
                  {/* 
                  <p>{title}</p>
                  <p>{description}</p>
                  <p>{capacity}</p>

                  <Image
                    src={main_image?.photo?.data?.attributes?.url || ''}
                    width={500}
                    height={500}
                    alt={main_image?.image_description || ''}
                  /> */}

                  {/* <p>Price: {price}</p> */}
                </div>
              ),
            )}
          </>
        ) : (
          <p>Something went wrong...</p>
        )}
      </div>
    </>
  );
}
