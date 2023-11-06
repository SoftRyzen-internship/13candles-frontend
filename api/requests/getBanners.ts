import { gql } from 'graphql-request';

export const getBanners = gql`
  query {
    banner {
      data {
        attributes {
          locale
          banners {
            id
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
