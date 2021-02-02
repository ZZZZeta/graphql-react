import { useState } from 'react';

export const usePagination = (perPage) => {
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
