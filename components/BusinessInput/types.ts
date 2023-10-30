import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';

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
