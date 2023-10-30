type ImageType = {
  src: string;
  alt: string;
};

type TextBlockType = {
  title: string;
  description1: string;
  description2: string;
};

export interface HelpfulSectionProps {
  image: ImageType;
  staticData: TextBlockType;
}
