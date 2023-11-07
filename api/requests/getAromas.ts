import { gql } from 'graphql-request';

export const getAromas = gql`
  query ($locale: I18NLocaleCode) {
    aromas(locale: $locale) {
      data {
        id
        attributes {
          Title
          Notes
          Sweetness
          Astringency
          Freshness
          locale
        }
      }
    }
  }
`;
