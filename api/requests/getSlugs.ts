import { gql } from 'graphql-request';

export const getSlugs = gql`
  query {
    categories(locale: "en") {
      data {
        attributes {
          slug
          sequence_number
        }
      }
    }
  }
`;
