import { createWithEqualityFn } from 'zustand/traditional';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { ICartState, StoredProduct } from './types';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = createWithEqualityFn<ICartState>()(
  persist(
    devtools(
      immer((set, get) => ({
        ...initialState,

        addProduct: (product: StoredProduct, quantity: number) =>
          set(
            store => {
              const index = store.items.findIndex(
                ({ product: { en_title, aroma } }) =>
                  product.en_title === en_title && product.aroma === aroma,
              );

              if (index === -1) {
                store.items.push({
                  product,
                  quantity,
                  totalPrice: product.price * quantity,
                });
              } else {
                store.items[index].quantity += quantity;
                store.items[index].totalPrice += product.price * quantity;
              }

              store.totalItems += quantity;
              store.totalPrice += product.price * quantity;
            },
            false,
            'addProduct',
          ),

        deleteProduct: (title: string, aroma?: string) =>
          set(store => {
            const index = store.items.findIndex(
              ({ product }) =>
                product.en_title === title && product.aroma === aroma,
            );

            store.totalItems -= store.items[index].quantity;
            store.totalPrice -=
              store.items[index].product.price * store.items[index].quantity;

            store.items.splice(index, 1);
          }),

        addOneProduct: (title: string, aroma?: string) =>
          set(store => {
            const idx = store.items.findIndex(
              ({ product }) =>
                product.en_title === title && product.aroma === aroma,
            );

            const price = store.items[idx].product.price;

            store.totalItems += 1;
            store.totalPrice += price;

            store.items[idx].quantity += 1;
            store.items[idx].totalPrice += price;
          }),

        deleteOneProduct: (title: string, aroma?: string) =>
          set(store => {
            const idx = store.items.findIndex(
              ({ product }) =>
                product.en_title === title && product.aroma === aroma,
            );

            const price = store.items[idx].product.price;

            store.totalItems -= 1;
            store.totalPrice -= price;

            store.items[idx].quantity -= 1;
            store.items[idx].totalPrice -= price;
          }),
        getOrder: () => {
          const { items, totalItems, totalPrice } = get();
          return { items, totalItems, totalPrice };
        },

        reset: () => {
          set(initialState);
        },
      })),
    ),
    {
      name: '13-candles',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true, // we need to implement manual hidration because of possible hidration error on server rendering app (Next.js)
    },
  ),
);
