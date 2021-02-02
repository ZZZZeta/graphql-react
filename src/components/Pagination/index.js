// flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #e7e7e7;
  color: black;
  border: none;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

type PaginationProps = {
  page: number,
  onNextClick: () => void,
  onPrevClick: () => void,
};

export const Pagination = (props: PaginationProps) => {
  const { page, onNextClick, onPrevClick } = props;

  return (
    <Wrapper>
      <Button onClick={() => onPrevClick()}>Prev</Button>
      <Button>{page}</Button>
      <Button onClick={() => onNextClick()}>Next</Button>
    </Wrapper>
  );
};
