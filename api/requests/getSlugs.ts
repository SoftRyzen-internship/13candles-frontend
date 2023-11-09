import { gql } from 'graphql-request';

export const getSlugs = gql`
  query ($locale: I18NLocaleCode) {
    categories(locale: $locale) {
      data {
        attributes {
          slug
          sequence_number
        }
      }
    }
  }
`;
