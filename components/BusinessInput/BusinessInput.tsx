import { FC } from 'react';
import classnames from 'classnames';
import { BusinessInputProps } from '@/types';

export const BusinessInput: FC<BusinessInputProps> = ({
  staticData,
  register,
  errors,
  section,
}) => {
  const { name, label, placeholder, errorMessage, type } = staticData;

  const inputError = errors[name];

  const labelClass = classnames(
    'relative flex w-full flex-col gap-2 xl:justify-between',
    {
      'xl:flex-row xl:items-center': section !== 'cart',
    },
    {
      'xl:flex-col xl:items-start': section === 'cart',
    },
  );

  const inputClass = classnames(
    'h-[35px] w-full xl:max-w-[376px] px-3 py-2 text-black-light border outline-black-light border-black-light placeholder:text-gray common-transition',
    {
      'border-red outline-red hover:outline-red focus:outline-red': inputError,
    },
  );

  return (
    <label className={labelClass}>
      <span> {label}</span>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {inputError ? (
        <span className="absolute -bottom-1 right-0 translate-y-[100%] text-[12px] leading-[14px] text-red">
          {(inputError?.message as string) || errorMessage}
        </span>
      ) : null}
    </label>
  );
};
