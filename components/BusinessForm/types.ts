import { Dispatch, SetStateAction } from 'react';
import { IBusinessInput } from '@/components/BusinessInput/types';
import { PopUpType } from '../BusinessFormWithPopUp/types';

type TitleDataT = {
  hero: string;
  contacts: string;
};

export interface IDataToSend {
  name: string;
  phone: string;
  email: string;
}

export interface BusinessFormProps {
  staticData: {
    title: TitleDataT;
    inputs: IBusinessInput[];
    button: string;
  };
  section: 'hero' | 'contacts';
  setPopUpType: Dispatch<SetStateAction<PopUpType>>;
}
