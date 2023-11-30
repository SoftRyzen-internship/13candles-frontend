import classNames from 'classnames';

import { CategoryCard } from '../ui/CategoryCard';
import { CategoriesListProps } from './types';

export const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  lang,
  className = '',
}) => {
  const listClasses = classNames('flex flex-wrap gap-4 xl:gap-2', className);

  return (
    <ul className={listClasses}>
      {categories.map(category => (
        <li
          key={category.id}
          className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(8px*5))/6)]"
        >
          <CategoryCard category={category} lang={lang} />
        </li>
      ))}
    </ul>
  );
};
