import { gql } from 'graphql-request';

export const getProducts = gql`
  query ($locale: I18NLocaleCode, $category: String) {
    products(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
    ) {
      data {
        id
        attributes {
          title
          price
          description
          aromas
          information
          capacity
          main_image {
            image_description
            photo {
              data {
                attributes {
                  url
                }
              }
            }
          }
          images {
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
