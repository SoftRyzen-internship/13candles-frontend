import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { StoredOrder } from '@/store/types';

//input
export interface IBusinessInput {
  name: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  type: string;
  options: OptionsType;
}

export interface BusinessInputProps {
  staticData: IBusinessInput;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  section: 'hero' | 'contacts' | 'cart';
}

type OptionsType = {
  required: boolean | string;
  pattern: string;
  minLength: { value: number; message: string };
  maxLength: { value: number; message: string };
};

//popUp
export type PopUpType = 'default' | 'success' | 'error';

export type SuccessT = {
  title: string;
  text: string;
};

type NotificationsDataT = {
  success: SuccessT;
  error: string;
};

type NotificationsTargetT = {
  business: NotificationsDataT;
  cart: NotificationsDataT;
};

//form
type TitleDataT = {
  hero: string;
  contacts: string;
  cart: string;
};

export interface BusinessFormProps {
  staticData: {
    title: TitleDataT;
    inputs: IBusinessInput[];
    button: {
      business: string;
      cart: string;
    };
  };
  section: 'hero' | 'contacts' | 'cart';
  setPopUpType: Dispatch<SetStateAction<PopUpType>>;
}

export type FormStaticDataT = {
  title: TitleDataT;
  inputs: IBusinessInput[];
  button: {
    business: string;
    cart: string;
  };
  notifications: NotificationsTargetT;
};

export interface BtnWithBusinessFormModalProps {
  staticData: FormStaticDataT;
  label: string;
}

export interface BusinessFormWithPopUpProps {
  staticData: FormStaticDataT;
  className?: string;
}

export interface IDataToSend {
  name: string;
  phone: string;
  email: string;
  order?: StoredOrder;
}

//button loader
export type ButtonLoaderProps = {
  color: string;
  className: string;
};
