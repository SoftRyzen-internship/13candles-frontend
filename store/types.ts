import { Image } from '@/types/commons';

export type StoredProduct = {
  uk_title: string;
  uk_capacity: string;
  uk_image: Image;
  en_title: string;
  en_capacity: string;
  en_image: Image;
  price: number;
  aroma?: string;
};

export type StoredItem = {
  quantity: number;
  product: StoredProduct;
  totalPrice: number;
};

export interface IItemsCartState {
  quantity: number;
  product: StoredProduct;
  totalPrice: number;
}

export type StoredOrder = {
  items: IItemsCartState[];
  totalItems: number;
  totalPrice: number;
};

export interface ICartState {
  items: IItemsCartState[];
  totalItems: number;
  totalPrice: number;

  // eslint-disable-next-line no-unused-vars
  addProduct: (product: StoredProduct, quantity: number) => void;

  // eslint-disable-next-line no-unused-vars
  deleteProduct: (title: string, aroma?: string) => void;

  // eslint-disable-next-line no-unused-vars
  addOneProduct: (title: string, aroma?: string) => void;

  // eslint-disable-next-line no-unused-vars
  deleteOneProduct: (title: string, aroma?: string) => void;
  getOrder: () => StoredOrder;

  reset: () => void;
}
