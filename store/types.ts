import { Image } from '@/types/commons';

export type StoredProduct = {
  title: string;
  capacity: string;
  price: number;
  image: Image;
  aroma?: string;
};

export type StoredItem = {
  quantity: number;
  product: StoredProduct;
  totalPrice: number;
};

export type StoredOrder = {
  items: StoredItem[];
  totalItems: number;
  totalPrice: number;
};

export interface ICartState {
  items: StoredItem[];
  totalItems: number;
  totalPrice: number;

  // eslint-disable-next-line no-unused-vars
  addProduct: (product: StoredProduct, quantity: number) => void;

  // eslint-disable-next-line no-unused-vars
  deleteProduct: (title: string, aroma?: string) => void;

  getOrder: () => StoredOrder;

  reset: () => void;
}
