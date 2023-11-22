'use client';

import { FC, useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { string, object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';

import { sendDataToTelegram } from '@/utils/api/sendDataToTelegram';

import { ButtonLoader } from '@/components/ButtonLoader';
import { BusinessInput } from '@/components/BusinessInput';
import { BusinessFormProps, IDataToSend } from '@/types';
import { useCartStore } from '@/store';

const FORM_DATA_KEY = 'form_data';

const formSchema: any = object({
  name: string()
    .trim()
    .required("обов'язкове поле")
    .matches(
      /^[a-zA-Zа-яА-ЯЇїІіЄєҐґ'\s-]*$/,
      'не передбачає числа та спецсимволи',
    )
    .min(2, 'мінімум 2 символи')
    .matches(
      /^(?!.*(\s-|-\s|--)).*$/,
      'не повинно бути поруч "тире" та "пробіл"',
    )
    .max(70, 'максимум 70 символів'),
  phone: string()
    .trim()
    .required("обов'язкове поле")
    .matches(/^\+.*$/, 'має починатися з +')
    .min(12, 'мінімум 11 цифр')
    .matches(/^\+\d*$/, 'передбачає лише цифри')
    .max(13, 'максимум 12 цифр'),
  email: string().trim().email('поле має бути валідним'),
});

export const BusinessForm: FC<BusinessFormProps> = ({
  staticData,
  section,
  setPopUpType,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { title, inputs, button } = staticData;
  const getOrder = useCartStore(store => store.getOrder);
  const resetOrder = useCartStore(store => store.reset);

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
      if (section === 'cart') {
        dataToSend = { ...formData, order: { ...getOrder() } };
      }
      const isSuccess: boolean = await sendDataToTelegram(
        dataToSend as IDataToSend,
      );
      // const isSuccess = true;
      // console.log(dataToSend);
      resetOrder();

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
