export type CategoriesData = CategoryDataInfo[] | undefined;

export interface CategoriesDataType {
  categories: {
    data: CategoryDataInfo[];
  };
}

export type CategoryDataInfo = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    sequence_number: number;
    image: {
      image_description: string;
      photo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};
