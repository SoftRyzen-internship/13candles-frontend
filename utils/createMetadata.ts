import { Locale } from '@/i18n.config';

import { fetchCategories } from '@/api/fetchCategories';
import { fetchProducts } from '@/api/fetchProducts';
import { getMetadata } from '@/lib/dictionary';

type Args = {
  lang: Locale;
  page: 'category' | 'product';
  category: string;
  product?: string;
};

export const createMetadata = async ({
  lang,
  category,
  product,
  page,
}: Args) => {
  const categories = (await fetchCategories(lang)) ?? [];
  const products = category ? await fetchProducts(lang, category) : [];

  const {
    meta: { openGraph, languages },
    metadataHome,
    metadataCategory,
    metadataProduct,
  } = await getMetadata(lang);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const categoryData = categories?.find(
    ({ attributes: { slug } }) => slug === category,
  );

  const productData = products?.find(
    ({ attributes: { slug } }) => slug === product,
  );

  const categoryTitle =
    categoryData?.attributes.title ?? metadataCategory.title;

  const productTitle = productData?.attributes.title ?? metadataProduct.title;

  const productDesc =
    productData && categoryData
      ? `${categoryTitle}: ${productTitle}. ${productData?.attributes.description}`
      : metadataHome.description;

  const getTitle = () => {
    switch (page) {
      case 'category':
        return `${metadataHome.title}. ${categoryTitle}`;
      case 'product':
        return `${metadataHome.title}. ${productTitle}`;
      default:
        return metadataHome.title;
    }
  };

  const getUrl = () => {
    switch (page) {
      case 'category':
        return `${baseUrl}/${lang}/${category}`;
      case 'product':
        return `${baseUrl}/${lang}/${category}/${product}`;
      default:
        return `${baseUrl}/${lang}`;
    }
  };

  const getDesc = () => {
    switch (page) {
      case 'product':
        return productDesc;
      default:
        return metadataHome.description;
    }
  };

  return {
    title: getTitle(),
    description: getDesc(), // TODO
    // keywords:  // TODO
    alternates: {
      canonical: getUrl(),
      languages,
    },
    openGraph: { ...openGraph, url: getUrl() },
  };
};
