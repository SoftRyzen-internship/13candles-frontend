import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

//input

type validationDataItemType = {
  propName: string;
  propValue: string;
  propMessage: string;
};

export interface IBusinessInput {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  validationData: validationDataItemType[];
}

export type SectionT = 'hero' | 'contacts' | 'cart';

export interface BusinessInputProps {
  staticData: IBusinessInput;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  section: SectionT;
}

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

export type FormStaticDataT = {
  title: TitleDataT;
  inputs: IBusinessInput[];
  button: {
    business: string;
    cart: string;
  };
  notifications: NotificationsTargetT;
};

export interface BusinessFormProps {
  staticData: FormStaticDataT;
  section: SectionT;
  setPopUpType: Dispatch<SetStateAction<PopUpType>>;
  className?: string;
}

export interface BtnWithBusinessFormModalProps {
  staticData: FormStaticDataT;
  label: string;
}

export interface BusinessFormWithPopUpProps {
  staticData: FormStaticDataT;
  className?: string;
}

//button loader
export type ButtonLoaderProps = {
  color: string;
  className: string;
};
