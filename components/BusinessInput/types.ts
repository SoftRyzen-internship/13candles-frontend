import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface IBusinessInput {
  name: string;
  label: string;
  placeholder: string;
  errorMessage: string;
  type: string;
  options: Record<string, RegisterOptions>;
}

export interface BusinessInputProps {
  staticData: IBusinessInput;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
