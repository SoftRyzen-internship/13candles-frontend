type ImageType = {
  src: string;
  alt: string;
};

type TextBlockType = {
  title: string;
  regularDescription1: string;
  regularDescription2: string;
  accentDescription: string;
};

export interface SecondSectionProps {
  image: ImageType;
  staticData: TextBlockType[];
}
