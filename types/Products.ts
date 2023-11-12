import { Image } from './commons';

export type ProductsData = ProductDataInfo[] | undefined;

export interface ProductsDataType {
  products: {
    data: ProductDataInfo[];
  };
}

export type ProductDataInfo = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    price: number;
    description: string;
    aromas: boolean;
    information: string;
    capacity: string;
    main_image: Image;
    images: Image;
  };
};
