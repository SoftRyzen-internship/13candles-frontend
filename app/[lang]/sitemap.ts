import { fetchAllSlugs } from '@/api/fetchAllSlugs';

import { i18n } from '@/i18n.config';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { locales, defaultLocale } = i18n;

  const categories = await fetchAllSlugs(defaultLocale);

  const homeUrls = locales.map(lang => {
    return {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
    };
  });

  const businessUrls = locales.map(lang => {
    return {
      url: `${baseUrl}/${lang}/business`,
      lastModified: new Date(),
    };
  });

  const categoriesUrls = categories.flatMap(({ slug }) => {
    const urls = locales.map(lang => {
      return {
        url: `${baseUrl}/${lang}/${slug}`,
        lastModified: new Date(),
      };
    });

    return urls;
  });

  const productsUrls = categories.flatMap(({ slug: category, products }) => {
    const urls = products.flatMap(product => {
      return locales.map(lang => {
        return {
          url: `${baseUrl}/${lang}/${category}/${product}`,
          lastModified: new Date(),
        };
      });
    });

    return urls;
  });

  return [...homeUrls, ...businessUrls, ...categoriesUrls, ...productsUrls];
}
