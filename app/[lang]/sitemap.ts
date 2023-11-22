import { fetchCategories } from '@/api/fetchCategories';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const locales = ['en', 'uk'];

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

  const enCategories = await fetchCategories('en');
  const enCategoriesSlugs =
    enCategories?.map(({ attributes: { slug } }) => slug) ?? [];
  const enCategoriesUrls = enCategoriesSlugs?.map(slug => {
    return {
      url: `${baseUrl}/en/${slug}`,
      lastModified: new Date(),
    };
  });

  const ukCategories = await fetchCategories('uk');
  const ukCategoriesSlugs =
    ukCategories?.map(({ attributes: { slug } }) => slug) ?? [];
  const ukCategoriesUrls = ukCategoriesSlugs?.map(slug => {
    return {
      url: `${baseUrl}/uk/${slug}`,
      lastModified: new Date(),
    };
  });

  return [
    ...homeUrls,
    ...businessUrls,
    ...enCategoriesUrls,
    ...ukCategoriesUrls,
  ];
}
