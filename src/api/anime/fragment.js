import { gql } from 'apollo-boost';

export const TITLE_FRAGMENT = gql`
  fragment TitleFragment on MediaTitle {
    native
    english
  }
`;

export const MEDIA_FRAGMENT = gql`
  fragment MediaFragment on Media {
    id
    bannerImage
    type
    title {
      ...TitleFragment
    }
  }
  ${TITLE_FRAGMENT}
`;
