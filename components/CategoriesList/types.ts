export interface CateriesListProps {
  categories: {
    href: string;
    text: string;
    className?: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  className?: string;
}
