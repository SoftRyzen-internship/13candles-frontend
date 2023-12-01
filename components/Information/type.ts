import { InfoData } from '@/types/Info';

export interface InformationProps {
  information: {
    title: string;
    buttons: {
      id: string;
      text: string;
      data: string;
    }[];
    className?: string;
  };
  dynamicInfo: InfoData;
}
