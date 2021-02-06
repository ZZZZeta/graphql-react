// flow
import { useState } from 'react';

type UsePagination = (
  perPage: number
) => {
  page: number,
  perPage: number,
  nextPage: () => void,
  prevPage: () => void,
};

export const usePagination: UsePagination = (perPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return {
    page: currentPage,
    perPage,
    nextPage,
    prevPage,
  };
};
