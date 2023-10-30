import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

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
}

type OptionsType = {
  required: boolean | string;
  pattern: string;
  minLength: number;
  maxLength: number;
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

//form
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
  setPopUpType: Dispatch<SetStateAction<PopUpType>>;
}

export type BusinessFormModalData = {
  title: TitleDataT;
  inputs: IBusinessInput[];
  button: string;
  notifications: NotificationsDataT;
};

export interface BtnWithBusinessFormModalProps {
  staticData: BusinessFormModalData;
  label: string;
}

export interface BusinessFormWithPopUpProps {
  staticData: {
    title: TitleDataT;
    inputs: IBusinessInput[];
    button: string;
    notifications: NotificationsDataT;
  };
}

export interface IDataToSend {
  name: string;
  phone: string;
  email: string;
}

//button loader
export type ButtonLoaderProps = {
  color: string;
  className: string;
};
