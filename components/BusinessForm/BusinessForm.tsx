'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import classnames from 'classnames';
import { BusinessInput } from '@/components/BusinessInput/BusinessInput';
import { Button } from '@/components/ui/Button/Button';
import { BusinessFormProps } from './types';

const FORM_DATA_KEY = 'form_data';

export const BusinessForm: FC<BusinessFormProps> = ({
  staticData,
  section,
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
    const sendFormData = async (data: any) => {
      try {
        //  await sendDataToTelegram(data);
        // return true;

        //delete!!!!!!!
        console.log(data);
        console.log(isLoading);
        return new Promise<boolean>(resolve => {
          setTimeout(() => {
            resolve(true);
          }, 3000);
          //---------!!!!!!!!!!
        });
      } catch (error) {
        return false;
      }
    };

    try {
      setIsLoading(true);
      const isSuccess: boolean = await sendFormData(data);

      if (isSuccess) {
        reset();
        localStorage.removeItem(FORM_DATA_KEY);
      }
    } catch (error) {
      console.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const titleClass = classnames(
    '',
    {
      'title-lg smOnly:text-xl mb-4 text-center md:mb-9 xl:mb-12':
        section === 'hero',
    },
    {
      'section-title-secondary mb-6 xl:mb-10 smOnly:text-center w-full max-w-[480px]  md:max-w-[350px] xl:max-w-[500px]':
        section === 'contacts',
    },
  );

  const formClass = classnames(
    'flex w-full max-w-[480px] flex-col gap-6 md:max-w-[350px] xl:max-w-[500px] xl:gap-10',
    {
      'mx-auto': section === 'hero',
    },
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
        <Button
          tag="button"
          buttonType="submit"
          label={button}
          className="xl:!bg-black-light xl:py-[11px] xl:!text-white xl:hover:!bg-white  xl:hover:!text-black-light xl:active:!bg-white xl:active:!text-black-light"
        />
      </form>
    </div>
  );
};
