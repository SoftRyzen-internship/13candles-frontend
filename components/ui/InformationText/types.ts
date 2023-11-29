export type TextType = 'mainTitle' | 'title' | 'subtitle' | 'text';

export interface InformationTextProps {
  text: string;
  dynamic?: boolean;
}

export type CustomTagProps = {
  children?: React.ReactNode;
};
