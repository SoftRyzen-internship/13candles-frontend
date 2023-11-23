import { fetchSlugs } from '@/api/fetchSlugs';

import { Locale } from '@/i18n.config';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

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

export default async function NestedCategoryLayout(props: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return <>{props.children}</>;
}
