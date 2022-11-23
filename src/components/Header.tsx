import React from 'react';
import Portrait from 'assets/images/balazs.jpg';
import styled from 'styled-components';
import NoPrint from './NoPrint';

const Wrapper = styled.div`
  background-color: var(--backgroundColor);
  height: 100%;
  padding: 0 1.5rem 0 0.5rem;
  display: flex;
  line-height: 1rem;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  height: var(--pageHeaderHeight);
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media print {
    padding-left: 0;
    height: auto;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const Title = styled.h1`
  opacity: 0.7;
  font-size: 1.5rem;
`;

const Name = styled.span`
  font-variation-settings: 'wght' 700;
`;

const Sub = styled.span`
  font-family: var(--sansItalic);
  font-variation-settings: 'wght' 500;
`;

const Header = ({
  children,
}: React.PropsWithChildren<Record<never, never>>) => (
  <Wrapper>
    <TitleWrapper>
      <NoPrint>
        <Image src={Portrait} />
      </NoPrint>
      <Title>
        <Name>Balázs Herczeg</Name> <Sub>resumé</Sub>
      </Title>
    </TitleWrapper>
    <NoPrint>{children}</NoPrint>
  </Wrapper>
);

export default Header;
