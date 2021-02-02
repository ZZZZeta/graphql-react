import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { GET_ANIME } from '../../../api/anime/query';

const Anime = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_ANIME, { variables: { id } });
  const anime = data?.Media;

  if (loading) return null;

  const {
    bannerImage,
    type,
    description,
    studios: { nodes: studios },
    title: { native: nativeTitle, english: englishTitle },
  } = anime;

  return (
    <div>
      <img src={bannerImage} alt="banner" />
      <div>{englishTitle}</div>
      <div>{nativeTitle}</div>
      <div>{type}</div>
      <div>{description}</div>
      <div>
        {studios.map((studio) => (
          <div key={studio.id}>{studio.name} </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;
