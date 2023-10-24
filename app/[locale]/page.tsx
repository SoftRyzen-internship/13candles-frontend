import { CatalogSection } from '@/sections/home/CatalogSection';
import { ExampleSection } from '@/sections/home/ExampleSection';

const data = {
  homepage: {
    catalog: {
      title: 'Каталог',
      subtitle: 'Оберіть категорію товарів, яка вас цікавить',
      categories: [
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
      ],
    },
  },
};

export default function Home() {
  const { catalog } = data.homepage;

  return (
    <main>
      <CatalogSection {...catalog} />
      <ExampleSection />
    </main>
  );
}
