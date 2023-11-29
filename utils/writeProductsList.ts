import { StoredItem } from '@/store/types';

export const writeProductsList = (items: StoredItem[]): string => {
  const productList = items.reduce(
    (accum, item, index) =>
      (accum += `${index + 1}. ${item.product.uk_title} ${
        item.product.aroma || ''
      } ${item.product.uk_capacity} ${item.quantity} шт. х ${
        item.product.price
      } ₴ = ${item.totalPrice} ₴\n`),
    '',
  );
  return productList;
};
