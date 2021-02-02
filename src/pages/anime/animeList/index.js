import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

// components
import { Pagination } from 'components/Pagination';

// utils
import { usePagination } from 'hooks/usePagination';
import { GET_ANIME_LIST } from 'api/anime/query';

const AnimeList = () => {
  const { page, perPage, nextPage, prevPage } = usePagination(50);
  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: { page, perPage },
  });
  const animeList = data?.Page?.media || [];

  if (loading) return null;

  return (
    <>
      <Pagination page={page} onNextClick={nextPage} onPrevClick={prevPage} />
      {animeList.map((anime) => {
        const {
          id,
          bannerImage,
          title: { english: englishTitle, native: nativeTitle },
        } = anime;

        return (
          <div key={id}>
            <Link to={`/anime/${id}`}>
              <img
                src={bannerImage}
                alt="anime banner"
                style={{ width: '400px', height: '200px' }}
              />
            </Link>
            <div>{englishTitle}</div>
            <div>{nativeTitle}</div>
          </div>
        );
      })}
    </>
  );
};

export default AnimeList;
