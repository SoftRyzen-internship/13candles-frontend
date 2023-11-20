'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getDictionary } from '@/lib/dictionary';

import { Locale } from '@/i18n.config';
import { BasketProps, BasketStaticDictionary } from './types';

export const Basket: React.FC<BasketProps> = ({ title }) => {
  const selectedProducts = []; // value from zustand global state in the future

  const [staticDictionary, setStaticDictionary] =
    useState<BasketStaticDictionary | null>(null);

  const lang = useParams().lang as Locale;

  useEffect(() => {
    const getStaticDictionary = async () => {
      const res = await getDictionary(lang);
      setStaticDictionary(res.common.orderModal);
    };

    getStaticDictionary();
  }, [lang]);

  return staticDictionary ? (
    <div>
      <h3 className="title-lg mb-4 border-b border-gray pb-4 md:mb-8 xl:mb-6 xl:pb-6">
        {title || staticDictionary.title}
      </h3>

      {selectedProducts.length > 0 ? (
        <div>
          <p>List of selected products and ordering form...</p>
        </div>
      ) : (
        <p className="pb-11 pt-2 text-center text-lg font-medium md:pb-[104px] md:pt-4 xl:text-xl">
          <span>{staticDictionary.emptyBasketText.subtitle}</span>
          <br />
          <span>{staticDictionary.emptyBasketText.tip}</span>
        </p>
      )}
    </div>
  ) : (
    <></>
  );
};
