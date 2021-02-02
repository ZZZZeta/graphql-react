import { gql } from "apollo-boost";

export const GET_ANIME_LIST = gql`
  query($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        bannerImage
        type
        title {
          native
          english
        }
      }
    }
  }
`;

export const GET_ANIME = gql`
  query($id: Int) {
    Media(id: $id) {
      id
      bannerImage
      type
      description
      studios {
        nodes {
          id
          name
        }
      }
      title {
        native
        english
      }
    }
  }
`;
