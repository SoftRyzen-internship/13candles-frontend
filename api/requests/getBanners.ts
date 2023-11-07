import { gql } from 'graphql-request';

export const getBanners = gql`
  query ($locale: I18NLocaleCode) {
    banner(locale: $locale) {
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
