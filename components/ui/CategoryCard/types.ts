export interface CateryCardProps {
  category: {
    href: string;
    text: string;
    className?: string;
    image: {
      src: string;
      alt: string;
    };
  };
}
