export type InfoType = InfoData;

export interface InfoDataType {
  information: {
    data: {
      attributes: InfoData;
    };
  };
}

export type InfoData = {
  contract_offer: string;
  warranty_and_returns: string;
  delivery_and_payment: string;
  website_terms_of_use: string;
};
