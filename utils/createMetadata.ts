import { Locale } from '@/i18n.config';

import { fetchCategories } from '@/api/fetchCategories';
import { fetchProducts } from '@/api/fetchProducts';
import { getMetadata } from '@/lib/dictionary';

import { FOR_BUSINESS } from '@/data';

type Args = {
  lang: Locale;
  category?: string;
  product?: string;
  page: 'home' | 'business' | 'category' | 'product';
};

export const createMetadata = async ({
  lang,
  category,
  product,
  page,
}: Args) => {
  const categories = category ? await fetchCategories(lang) : [];
  const products = category ? await fetchProducts(lang, category) : [];

  const {
    meta,
    metadataHome,
    metadataBusiness,
    metadataCategory,
    metadataProduct,
  } = await getMetadata(lang);

  const { twitter, openGraph, icons, languages, manifest } = meta;

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
      case 'business':
        return metadataBusiness.title;
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
      case 'business':
        return `${baseUrl}/${lang}${FOR_BUSINESS}`;
      case 'category':
        return `${baseUrl}/${lang}/${category}`;
      case 'product':
        return `${baseUrl}/${lang}/${product}`;
      default:
        return `${baseUrl}/${lang}`;
    }
  };

  const getDesc = () => {
    switch (page) {
      case 'business':
        return metadataBusiness.description;
      case 'product':
        return productDesc;
      default:
        return metadataHome.description;
    }
  };

  const getKeys = () => {
    switch (page) {
      case 'business':
        return metadataBusiness.keywords;
      default:
        return metadataHome.keywords;
    }
  };

  return {
    title: getTitle(),
    description: getDesc(), // TODO
    metadataBase: new URL(baseUrl),
    manifest,
    alternates: {
      canonical: getUrl(),
      languages,
    },
    keywords: getKeys(), // TODO
    twitter,
    openGraph: { ...openGraph, url: getUrl() },
    icons,
  };
};
