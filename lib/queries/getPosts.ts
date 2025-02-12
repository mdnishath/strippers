import { gql } from "@apollo/client";

export const GET_MALES = gql`
  query GetMales {
    males {
      nodes {
        id
        title
        slug
        profile {
          fullName
          price
          bio
          profileOutfits
          profileState
          gallery {
            nodes {
              altText
              id
              mediaItemUrl
            }
          }
          profileImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
        identity {
          city
          state
          area
        }
      }
    }
  }
`;
