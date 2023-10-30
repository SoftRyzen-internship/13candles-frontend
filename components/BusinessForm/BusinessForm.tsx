'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classnames from 'classnames';

import { sendDataToTelegram } from '@/utils/api/sendDataToTelegram';

import { ButtonLoader } from '@/components/ButtonLoader';
import { BusinessInput } from '@/components/BusinessInput';
import { BusinessFormProps, IDataToSend } from './types';

const FORM_DATA_KEY = 'form_data';

export const BusinessForm: FC<BusinessFormProps> = ({
  staticData,
  section,
  setPopUpType,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { title, inputs, button } = staticData;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<FieldValues>({
    shouldFocusError: false,
  });

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      setIsLoading(true);
      const isSuccess: boolean = await sendDataToTelegram(data as IDataToSend);

      if (isSuccess) {
        reset();
        sessionStorage.removeItem(FORM_DATA_KEY);
        setPopUpType('success');
      }
    } catch (error) {
      setPopUpType('error');
      console.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const titleClass = classnames(
    {
      'title-lg smOnly:text-xl mb-4 text-center md:mb-9 xl:mb-12':
        section === 'hero',
    },
    {
      'section-title-secondary mb-6 xl:mb-10 smOnly:text-center w-full max-w-[480px] md:max-w-[350px] xl:max-w-[500px] whitespace-pre-wrap':
        section === 'contacts',
    },
  );

  const formClass = classnames(
    'flex w-full max-w-[480px] md:max-w-full flex-col gap-6 md:w-[350px] xl:w-[500px] xl:gap-10',
    {
      'mx-auto': section === 'hero',
    },
  );

  const btnStyles = classnames(
    'common-transition bg-black-light text-white mx-auto block',
    'w-full cursor-pointer px-12 text-center text-[20px] h-[47px] font-medium leading-6 xl:border ',
    'xl:hover:bg-white xl:hover:text-black-light xl:active:bg-white xl:active:text-black-light',
  );

  return (
    <div>
      <h2 className={titleClass}>
        {section === 'hero' ? title.hero : title.contacts}
      </h2>
      <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-4 xl:gap-9">
          {inputs.map(inputData => (
            <BusinessInput
              key={inputData.name}
              staticData={inputData}
              register={register}
              errors={errors}
            />
          ))}
        </div>
        <button type="submit" disabled={isLoading} className={btnStyles}>
          {isLoading ? (
            <ButtonLoader color="grey" className="justify-center" />
          ) : (
            button
          )}
        </button>
      </form>
    </div>
  );
};
