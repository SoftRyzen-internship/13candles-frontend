import { gql } from 'graphql-request';

export const getProducts = gql`
  query ($locale: I18NLocaleCode, $category: String) {
    products(
      locale: $locale
      filters: { category: { slug: { eq: $category } } }
      sort: "id:desc"
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
