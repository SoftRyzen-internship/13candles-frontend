import { createWithEqualityFn } from 'zustand/traditional';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { ICartState } from './types';

export const useCartStore = createWithEqualityFn<ICartState>()(
  persist(
    devtools(
      immer(set => ({
        items: [],
        totalItems: 0,
        totalPrice: 0,

        addProduct: (product, quantity) =>
          set(
            store => {
              const index = store.items.findIndex(
                ({ product: { title, aroma } }) =>
                  product.title === title && product.aroma === aroma,
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

        deleteProduct: (title, aroma) =>
          set(store => {
            const index = store.items.findIndex(
              ({ product }) =>
                product.title === title && product.aroma === aroma,
            );

            store.totalItems -= store.items[index].quantity;
            store.totalPrice -=
              store.items[index].product.price * store.items[index].quantity;

            store.items.splice(index, 1);
          }),
      })),
    ),
    {
      name: '13-candles',
      storage: createJSONStorage(() => sessionStorage),
      skipHydration: true, // we need to implement manual hidration because of possible hidration error on server rendering app (Next.js)
    },
  ),
);
