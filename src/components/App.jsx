import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import '../assets/styles/reset.css';
import Header from './Header';
import Timelines from './Timelines';

const GlobalStyle = createGlobalStyle`
  body {
    --backgroundColor: #eee;

    background-color: var(--backgroundColor);
    padding: 0 2em;
    font-family: 'Source Sans Pro', sans-serif;

  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  --pageHeaderHeight: 4rem;
  padding-top: var(--pageHeaderHeight);
`;

const HeaderWrapper = styled.div`
  position: fixed;
  height: var(--pageHeaderHeight);
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <main>
      <Timelines />
    </main>
  </Wrapper>
);

export default App;