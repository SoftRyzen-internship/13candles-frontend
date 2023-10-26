type TextTypes = 'mainTitle' | 'title' | 'subtitle' | 'text';

export interface InformationTextProps {
  textType: TextTypes;
  content: string | string[];
}
