import { gql } from 'graphql-request';

export const getInfo = gql`
  query ($locale: I18NLocaleCode) {
    information(locale: $locale) {
      data {
        attributes {
          contract_offer
          warranty_and_returns
          delivery_and_payment
          website_terms_of_use
        }
      }
    }
  }
`;
