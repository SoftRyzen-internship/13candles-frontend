'use client';

import { FC } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
// import classnames from 'classnames';
const FORM_DATA_KEY = 'form_session_data';

export const BusinessForm: FC = () => {
  const {
    // register,
    // formState: { errors },
    handleSubmit,
    // control,
    watch,
    setValue,
    reset,
  } = useForm<FieldValues>({
    shouldFocusError: false,
  });

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const onSubmit: SubmitHandler<any> = async data => {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.error('Something went wrong');
    }
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};
