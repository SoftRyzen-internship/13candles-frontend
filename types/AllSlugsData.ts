export type AllSlugsData = {
  categories: {
    data: {
      attributes: {
        slug: string;
        products: {
          data: {
            attributes: {
              slug: string;
            };
          }[];
        };
      };
    }[];
  };
};

export type AllSlugsRes = {
  slug: string;
  products: string[];
}[];
