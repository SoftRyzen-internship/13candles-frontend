import { FC } from 'react';
import classnames from 'classnames';
import { BusinessInputProps } from './types';

export const BusinessInput: FC<BusinessInputProps> = ({
  staticData,
  register,
  errors,
}) => {
  const { name, label, placeholder, errorMessage, type, options } = staticData;

  const inputError = errors[name];

  const inputClass = classnames(
    'h-[35px] w-full xl:max-w-[376px] px-3 py-2 text-black-light border outline-black-light border-black-light placeholder:text-gray common-transition',
    {
      'border-red outline-red hover:outline-red focus:outline-red': inputError,
    },
  );

  return (
    <label className="relative flex w-full flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
      <span> {label}</span>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          ...options,
          pattern: new RegExp(options.pattern as string),
        })}
      />

      {inputError ? (
        <span className="absolute -bottom-1 right-0 translate-y-[100%] text-[12px] leading-[14px] text-red">
          {(inputError?.message as string) || errorMessage}
        </span>
      ) : null}
    </label>
  );
};
