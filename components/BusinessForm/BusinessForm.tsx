'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';

import { sendDataToTelegram } from '@/utils/api/sendDataToTelegram';

import { ButtonLoader } from '@/components/ButtonLoader';
import { BusinessInput } from '@/components/BusinessInput';

import { useCartStore } from '@/store';
import { BusinessFormProps, IDataToSend } from '@/types';

const FORM_DATA_KEY = 'form_data';

export const BusinessForm: FC<BusinessFormProps> = ({
  staticData,
  section,
  setPopUpType,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { title, inputs, button } = staticData;
  const getOrder = useCartStore(store => store.getOrder);
  const resetOrder = useCartStore(store => store.reset);

  const formSchema: any = object({
    name: string()
      .trim()
      .required(inputs[0].validationData[2].propMessage)
      .matches(
        RegExp(inputs[0].validationData[3].propValue),
        inputs[0].validationData[3].propMessage,
      )
      .min(
        Number(inputs[0].validationData[0].propValue),
        inputs[0].validationData[0].propMessage,
      )
      .matches(
        RegExp(inputs[0].validationData[4].propValue),
        inputs[0].validationData[4].propMessage,
      )
      .max(
        Number(inputs[0].validationData[1].propValue),
        inputs[0].validationData[1].propMessage,
      ),
    phone: string()
      .trim()
      .required(inputs[1].validationData[2].propMessage)
      .matches(
        RegExp(inputs[1].validationData[3].propValue),
        inputs[1].validationData[3].propMessage,
      )
      .min(
        Number(inputs[1].validationData[0].propValue),
        inputs[1].validationData[0].propMessage,
      )
      .matches(
        RegExp(inputs[1].validationData[4].propValue),
        inputs[1].validationData[4].propMessage,
      )
      .max(
        Number(inputs[1].validationData[1].propValue),
        inputs[1].validationData[1].propMessage,
      ),
    email: string().trim().email(inputs[2].validationData[0].propMessage),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<FieldValues>({
    shouldFocusError: false,
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    try {
      setIsLoading(true);

      let dataToSend = { ...formData };
      if (section === 'hero') {
        dataToSend = { ...formData, order: { ...getOrder() } };
      }
      const isSuccess: boolean = await sendDataToTelegram(
        dataToSend as IDataToSend,
      );

      if (isSuccess) {
        reset();
        resetOrder();
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

  const windowClass = classnames({
    'flex flex-col justify-between h-[259px] w-[280px] md:w-[250px] xl:h-[315px] xl:w-[284px]':
      section === 'cart',
  });

  const titleClass = classnames(
    {
      'title-lg smOnly:text-xl mb-4 text-center md:mb-9 xl:mb-12':
        section === 'hero',
    },
    {
      'section-title-secondary mb-6 xl:mb-10 smOnly:text-center w-full max-w-[480px] md:max-w-[350px] xl:max-w-[500px] whitespace-pre-wrap':
        section === 'contacts',
    },
    {
      'text-[20px] font-medium smOnly:text-center': section === 'cart',
    },
  );

  const formClass = classnames(
    'flex w-full max-w-[480px] md:max-w-full flex-col gap-6 md:w-[350px] xl:w-[500px] xl:gap-10',
    {
      'mx-auto': section === 'hero',
    },
    {
      'md:w-[250px] xl:w-[284px] gap-8 xl:gap-12': section === 'cart',
    },
  );

  const btnStyles = classnames(
    'common-transition bg-black-light text-white mx-auto block',
    'w-full cursor-pointer px-0 text-center text-[20px] h-[47px] font-medium leading-6 xl:border ',
    'xl:hover:bg-white xl:hover:text-black-light xl:active:bg-white xl:active:text-black-light',
  );

  return (
    <div className={windowClass}>
      <h2 className={titleClass}>
        {section === 'hero' && title.hero}
        {section === 'contacts' && title.contacts}
        {section === 'cart' && title.cart}
      </h2>
      <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-4 xl:gap-9">
          {inputs
            .filter(input =>
              section === 'cart' && input.name === 'email' ? false : true,
            )
            .map(inputData => (
              <BusinessInput
                key={inputData.name}
                staticData={inputData}
                register={register}
                errors={errors}
                section={section}
              />
            ))}
        </div>
        <button type="submit" disabled={isLoading} className={btnStyles}>
          {isLoading && (
            <ButtonLoader color="grey" className="justify-center" />
          )}
          {!isLoading && (section === 'cart' ? button.cart : button.business)}
        </button>
      </form>
    </div>
  );
};
