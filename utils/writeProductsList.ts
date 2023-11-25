import { StoredItem } from '@/store/types';

export const writeProductsList = (items: StoredItem[]): string => {
  const productList = items.reduce(
    (accum, item, index) =>
      (accum += `${index + 1}. ${item.product.title} ${item.product.capacity} ${
        item.quantity
      } шт. х ${item.product.price} ₴ = ${item.totalPrice} ₴\n`),
    '',
  );
  return productList;
};
