import React from 'react';
import styled from 'styled-components';
import { MAX } from 'utils';

const Year = styled.div`
  border-bottom: #aaa 1px solid;
  color: #aaa;
  height: ${(props) => props.height}%;
  position: relative;
  width: calc(100% - 3em);

  &:last-child {
    border-bottom: none;
  }
`;

const Inner = styled.div`
  bottom: 0;
  line-height: 24px;
  margin-bottom: -9px;
  margin-right: -3em;
  padding-left: 8px;
  position: absolute;
  right: 0;
  text-align: left;
  width: 3em;
`;

const date = new Date();

const getYear = (index) => date.getFullYear() - index * 1;

const getCurrentYearHeight = () =>
  getFullYearHeight() * ((date.getMonth() + 1) / 12);

const getFullYearHeight = () => 100 / MAX;

const getFirstYearHeight = () => getFullYearHeight() - getCurrentYearHeight();

const getHeight = (index) => {
  if (index === 0) return getCurrentYearHeight();
  if (index === MAX) return getFirstYearHeight();
  return getFullYearHeight();
};

const Years = () => (
  <>
    {[...Array(MAX + 1)].map((e, index) => (
      <Year key={getYear(index)} height={getHeight(index)}>
        {index < MAX && <Inner>{getYear(index)}</Inner>}
      </Year>
    ))}
  </>
);

export default Years;
