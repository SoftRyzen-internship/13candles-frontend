import { CategoriesList } from '@/components/CategoriesList';

export const CatalogSection = () => {
  const title = 'Каталог';
  const subtitle = 'Оберіть категорію товарів, яка вас цікавить';

  return (
    <section className="section xl:pb-[50px] xl:pt-[15px]">
      <div className="container">
        <h2 className="section-title-primary mb-2">{title}</h2>
        <p className="mb-6 text-md font-medium text-black-light/25">
          {subtitle}
        </p>
        <CategoriesList />
      </div>
    </section>
  );
};
