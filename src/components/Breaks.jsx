import React from 'react';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';

import { getTop, getHeight } from '../utils';

const Break = styled.div`
  align-items: center;
  background-color: ${({ full }) => full ? '#eee' : '#eeea'};
  display: flex;
  font-size: 14px;
  height: ${({ end, start }) => `${getHeight(end, start)}%`};
  position: absolute;
  text-transform: uppercase;
  top: ${({ end }) => `${getTop(end)}%`};
  width: 100%;
  letter-spacing: .1em;
  color: #000c;
`;

const Breaks = ({
  items,
}) => (
  <>
    {items.map(({
      name,
      period: [start, end],
      full,
    }) => (
      <Break
        end={end}
        full={full}
        key={name}
        start={start}
      >
        {name}
      </Break>
    ))}
  </>
);

Breaks.propTypes = {
  items: arrayOf(shape({
    name: string.isRequired,
    period: arrayOf(number).isRequired,
    full: bool,
  })).isRequired,
};

export default Breaks;
