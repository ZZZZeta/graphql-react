import { gql } from 'apollo-boost';

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
  query($id: Int, $isMain: Boolean) {
    Media(id: $id) {
      id
      bannerImage
      type
      description
      studios(isMain: $isMain) {
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
