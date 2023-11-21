import type { Metadata } from 'next';
import type { Locale } from '@/i18n.config';

import { FakeProductCard } from '@/components/ui/AddToCartBtn/FakeProductCard';
import { ProductSlider } from '@/components/ProductSlider';
import { CatalogSection } from '@/sections/home/CatalogSection';
import { Aromas } from '@/components/Aromas';

import { getDictionary } from '@/lib/dictionary';
import { createMetadata } from '@/utils';
import { fetchOneProduct } from '@/api/fetchOneProduct';
import { fetchProducts } from '@/api/fetchProducts';
import { fetchAromas } from '@/api/fetchAromas';

export const dynamicParams = false;

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
  const productData = await fetchOneProduct(lang, category, product);
  const {
    common: { orderModal },
  } = await getDictionary(lang);
  const aromas = await fetchAromas(lang);

  const { productpage } = await getDictionary(lang);
  const { product_description } = productpage;

  return (
    <>
      <div>
        <p className="smOnly:pt-[200px]">
          Product page. Мова {lang}. Категорія {category}.
        </p>

        {productData && productData.length > 0 ? (
          <>
            {productData.map(({ attributes: { title, images } }) => (
              <div key={title} className="pb-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-3">
                  <ProductSlider images={images} />

                  <FakeProductCard
                    dataOrder={orderModal}
                    product={productData[0]}
                  />
                </div>
              </div>
            ))}
            <CatalogSection lang={lang} />

            <Aromas aromas={aromas} prodDescription={product_description} />
          </>
        ) : (
          <p>Something went wrong...</p>
        )}
      </div>
    </>
  );
}
