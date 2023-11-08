import { CategoriesList } from '@/components/CategoriesList';
import { CATALOG } from '@/data';

import { fetchCategories } from '@/api/api/fetchCategories';

import { CatalogSectionProps } from './types';
import { fetchSlugs } from '@/api/api/fetchSlugs';

export const CatalogSection: React.FC<CatalogSectionProps> = async ({
  catalog: { title, subtitle, categories: staticCategories },
  lang,
}) => {
  const categories = await fetchCategories(lang);
  const categoriesDataForSlugs = await fetchSlugs();

  console.log(categoriesDataForSlugs);

  const slugs = categoriesDataForSlugs?.map(({ slug, sequence_number }) => {
    return {
      sequence_number: sequence_number,
      slug: slug,
    };
  });

  return (
    <section id={CATALOG} className="section xl:pb-[50px] xl:pt-[15px]">
      <div className="container">
        <h2 className="section-title-primary mb-2">{title}</h2>

        <p className="mb-6 text-md font-medium text-black-light/25">
          {subtitle}
        </p>

        {categories && slugs && categories.length > 0 ? (
          <CategoriesList categories={categories} slugs={slugs} lang={lang} />
        ) : (
          <CategoriesList categories={staticCategories} />
        )}
      </div>
    </section>
  );
};
