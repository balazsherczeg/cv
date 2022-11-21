import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Title = styled.h3`
  font-weight: 600;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Artist = styled.p`
  font-style: italic;
`;

const Music = ({ artist, link, title }) => (
  <>
    <Title>
      <a href={link} target="music">
        {title}
      </a>
    </Title>
    <Artist>{artist}</Artist>
  </>
);

Music.propTypes = {
  artist: string,
  link: string,
  title: string.isRequired,
};

export default Music;
