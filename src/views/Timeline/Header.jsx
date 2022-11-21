import React from 'react';
import styled from 'styled-components';

import Portrait from 'assets/images/balazs.jpg';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  background-color: var(--backgroundColor);
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  font-size: 1.5rem;
  line-height: 1rem;
  align-items: center;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  margin-right: 1rem;
`;

const Title = styled.h1`
  opacity: 0.7;
`;

const Name = styled.span`
  font-weight: 700;
`;

const Sub = styled.span`
  font-style: italic;
`;

const Header = () => (
  <Wrapper>
    <Image src={Portrait} />
    <Title>
      <Name>Balázs Herczeg</Name> <Sub>resumé</Sub>
    </Title>
    <Link to="/text">Traditional</Link>
  </Wrapper>
);

Header.propTypes = {};

export default Header;
