import { gql } from 'graphql-request';

export const getCategories = gql`
  query ($locale: I18NLocaleCode) {
    categories(
      locale: $locale
      sort: "sequence_number:asc"
      pagination: { limit: 100 }
    ) {
      data {
        id
        attributes {
          title
          sequence_number
          slug
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
