import { BusinessItem } from '@/types/BusinessItem';
import { FormStaticDataT } from '@/types';

export type ImageT = { alt: string; src: string };

export interface HeroProps {
  image: ImageT;
  overtitle: string;
  title: string;
  services: BusinessItem[];
  button: string;
  form: FormStaticDataT;
}
