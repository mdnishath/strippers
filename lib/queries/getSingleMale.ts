import { gql } from "@apollo/client";

export const GET_MALE_BY_SLUG = gql`
  query GetMaleBySlug($slug: String!) {
    maleBy(slug: $slug) {
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
`;
