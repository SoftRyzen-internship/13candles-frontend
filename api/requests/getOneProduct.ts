import { gql } from 'graphql-request';

export const getOneProduct = gql`
  query ($locale: I18NLocaleCode, $category: String, $product: String) {
    products(
      locale: $locale
      filters: { slug: { eq: $product }, category: { slug: { eq: $category } } }
      pagination: { limit: 100 }
    ) {
      data {
        id
        attributes {
          title
          slug
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
