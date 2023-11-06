import { gql } from 'graphql-request';

export const getAromas = gql`
  query ($locale: String) {
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

// export const getAromas = gql`
//   query {
//     aromas(locale: 'uk') {
//       data {
//         id
//         attributes {
//           Title
//           Notes
//           Sweetness
//           Astringency
//           Freshness
//         }
//       }
//     }
//   }
// `;
