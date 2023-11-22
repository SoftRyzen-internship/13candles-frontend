'use client';

import { useCartStore } from '@/store';
import { useEffect } from 'react';

export const useRehydrate = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
};
