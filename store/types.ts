import { Image } from '@/types/commons';

export type StoredProduct = {
  title: string;
  capacity: string;
  price: number;
  image: Image;
  aroma?: string;
};

export interface ICartState {
  items: {
    quantity: number;
    product: StoredProduct;
    totalPrice: number;
  }[];
  totalItems: number;
  totalPrice: number;

  addProduct: (product: StoredProduct, quantity: number) => void;
  deleteProduct: (title: string, aroma?: string) => void;
}
