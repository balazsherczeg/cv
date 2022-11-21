import React from 'react';
import { string, arrayOf, number} from 'prop-types';
import styled from 'styled-components';

import { getTop, getHeight } from '../utils';

const Wrapper = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  height: 100%;
  transition: var(--openingSpeed) width;
  width: ${({ isOpen }) => isOpen ? 'var(--headerHeight)' : `var(--columnWidth)`};
  /*width: var(--columnWidth);*/
`;

const Periods = styled.div`
  height: 100%;
  position: relative;
`;

const Active = styled.div`
  background-color: ${props => props.color};
  height: ${props => `${props.height}%`};
  left: 4px;
  position: absolute;
  top: ${props => `${props.top}%`};
  width: 16px;
`;

const Inactive = styled(Active)`
  background-color: black;
  background: repeating-linear-gradient(
    to bottom,
    ${props => props.color},
    ${props => props.color} 2px,
    transparent 2px,
    transparent 4px
  );
`;

const Timeline = ({
  active,
  inactive,
  color,
  name,
  events,
  isOpen,
  onClick,
}) => (
  <Wrapper
    isOpen={isOpen}
    onClick={() => onClick(isOpen ? null : name)}
  >
    <Periods>
      {active.map(([start, end]) => (
        <Active
          key={name}
          color={color}
          top={getTop(end)}
          height={getHeight(end, start)}
        />
      ))}

      {inactive.map(([start, end]) => (
        <Inactive
          key={name}
          color={color}
          top={getTop(end)}
          height={getHeight(end, start)}
        />
      ))}
    </Periods>
  </Wrapper>
);

Timeline.defaultProps = {
  active: [],
  inactive: [],
  events: [],
};

Timeline.propTypes = {
  color: string.isRequired,
  inactive: arrayOf(arrayOf(number)),
};

export default Timeline;
