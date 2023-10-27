import { IBusinessInput } from '@/components/BusinessInput/types';

type TitleDataT = {
  hero: string;
  contacts: string;
};

export interface BusinessFormProps {
  staticData: {
    title: TitleDataT;
    inputs: IBusinessInput[];
    button: string;
  };
  section: 'hero' | 'contacts';
}
