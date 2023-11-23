import { gql } from 'graphql-request';

export const getBanners = gql`
  query ($locale: I18NLocaleCode) {
    banner(locale: $locale, pagination: { limit: 100 }) {
      data {
        attributes {
          banners {
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
        id
      }
    }
  }
`;
