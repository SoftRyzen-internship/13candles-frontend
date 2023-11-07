import { gql } from 'graphql-request';

export const getCategories = gql`
  query ($locale: I18NLocaleCode) {
    categories(locale: $locale) {
      data {
        id
        attributes {
          title
          slug
          sequence_number
          image {
            image_description
            photo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
