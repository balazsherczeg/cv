import React from 'react';
import { bool, number, string, shape } from 'prop-types';
import styled from 'styled-components';
// import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';

import { getTop } from '../utils';
import Animator from './Animator';
import Music from './Music';

const Wrapper = styled.div`
  --markerSize: 18px;
  position: absolute;
  top: ${({ date }) => `${getTop(date)}%`};
  margin-top: calc(var(--markerSize) / -2);

  .InfoWrapper {
    transition: opacity .3s;

    &--mounted {
      opacity: 1;
    }

    &--unmounted {
      opacity: 0;
    }
  }
`;

const Marker = styled.div`
  background-color: var(--backgroundColor);
  border-radius: 10px;
  border: 6px solid ${({ color }) => color};
  height: var(--markerSize);
  left: calc((var(--columnWidth) - var(--markerSize)) / 2);
  position: absolute;
  width: var(--markerSize);
`;

const Info = styled.div`
  padding-left: 28px;
  width: var(--headerHeight);
  line-height: 1.2;
  font-size: 14px;

  a {
    color: inherit;
  }
`;

const Event = ({
  color,
  isOpen,
  eventData,
  eventData: {
    date,
    title,
    type,
  },
}) => {
  const top = getTop(date);

  return (
    <Wrapper date={date}>
      <Marker
        date={date}
        color={color}
      />
      <Animator
        isMounted={isOpen}
        className="InfoWrapper"
        delay={300}
      >
        <Info
          date={date}
        >
          {type === 'music' ? (
            <Music { ...eventData } />
          ) : (
            <Markdown>{title}</Markdown>
          )}
        </Info>
      </Animator>
    </Wrapper>
  );
};

Event.propTypes = {
  eventData: shape({
    date: number.isRequired,
    title: string.isRequired,
    type: string,
    artist: string,
    link: string,
  }),
  isOpen: bool.isRequired,
  color: string.isRequired,
};

export default Event;