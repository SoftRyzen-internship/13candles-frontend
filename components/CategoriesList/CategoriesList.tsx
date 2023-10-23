import classNames from 'classnames';
import { CategoryCard } from '../ui/CategoryCard';
import { CateriesListProps } from './types';

const categories = [
  {
    href: './candles-category-url0',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
  {
    href: './candles-category-url1',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
  {
    href: './candles-category-url2',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
  {
    href: './candles-category-url3',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
  {
    href: './candles-category-url4',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
  {
    href: './candles-category-url5',
    text: 'Аромасвічки',
    image: {
      src: '/images/homepage/catalog/accessories@2x.webp',
      alt: 'Аромасвічки',
    },
  },
];

export const CategoriesList: React.FC<CateriesListProps> = ({ className }) => {
  const listClasses = classNames('flex flex-wrap gap-4 xl:gap-2', className);

  return (
    <ul className={listClasses}>
      {categories.map(category => (
        <li
          key={category.href}
          className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(8px*5))/6)]"
        >
          <CategoryCard {...category} />
        </li>
      ))}
    </ul>
  );
};
