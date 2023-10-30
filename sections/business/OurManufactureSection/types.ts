type TextBlockType = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
};
type ImageType = {
  src: string;
  alt: string;
};

export interface OurManufactureSectionProps {
  image: ImageType;
  textBlock: TextBlockType;
  className?: string;
}
