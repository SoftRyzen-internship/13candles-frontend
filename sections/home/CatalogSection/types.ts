export interface CatalogSectionProps {
  catalog: {
    title: string;
    subtitle: string;
    categories: {
      href: string;
      text: string;
      className?: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
  };
}
